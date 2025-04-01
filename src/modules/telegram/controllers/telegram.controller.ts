import { Request, Response } from 'express';
import { TelegramService } from '../services/telegram.service';

export class TelegramController {
    private telegramService: TelegramService;

    constructor() {
        this.telegramService = new TelegramService();
    }

    public handleWebhook(req: Request, res: Response): void {
        const update = req.body;
        this.telegramService.processUpdate(update);
        res.sendStatus(200);
    }
}