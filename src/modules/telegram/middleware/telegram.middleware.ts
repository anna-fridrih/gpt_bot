import { Request, Response, NextFunction } from 'express';

export const TelegramMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    // Middleware logic here
    next();
};