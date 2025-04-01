import express from 'express';
import { TelegramController } from './src/modules/telegram/controllers/telegram.controller';
import { TelegramMiddleware } from './src/modules/telegram/middleware/telegram.middleware';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(TelegramMiddleware);

const telegramController = new TelegramController();

app.post('/', telegramController.handleWebhook);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});