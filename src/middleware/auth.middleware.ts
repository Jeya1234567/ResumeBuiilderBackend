import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';
import pool from "../config/db";

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const JWT_Refreah_SECRET = process.env.JWT_REFRESH_SECRET || 'your_jwt_refresh_secret_key';

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    const refreshToken = req.cookies.refreshToken;
    
    if (!token) {

        if(!refreshToken){
            return res.status(401).json({ message: 'No token provided' });
        }

        else{

            const payload = jwt.verify(refreshToken, JWT_Refreah_SECRET);
            (req as any).user = payload;

            const [rows]:any = await pool.execute(
                'CALL sp_get_refresh_token(?)',
                [refreshToken]
            );
            
            const dbRow = rows?.[0]?.[0];
            if (!dbRow) {
            return res.status(401).json({ message: 'Invalid refresh token' });
            }

            else
                {
                    console.log('access token refreshed successfully:', payload);
                const accessToken = jwt.sign({ userId: (req as any).user.userId, email:(req as any).user.email  }, JWT_SECRET, { expiresIn: '10m' });
                res.cookie('token', accessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'strict',
                    maxAge: 10 * 60 * 1000 // 10 minutes
                });
                return next();
            }
        }
        
    }
  else{
    jwt.verify(token, JWT_SECRET, (err: any, user: any ) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        console.log('Token verified successfully:', user);
        (req as any).user = user;
        next();
    });
  }
};