export class TelegramService {
    public processUpdate(update: any): void {
        // Process the update from Telegram
        console.log('Received update:', update);
    }
}