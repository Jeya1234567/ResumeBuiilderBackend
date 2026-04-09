import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, JWT_SECRET, (err: any, user: any ) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        console.log('Token verified successfully:', user);
        (req as any).user = user;
        next();
    });
};