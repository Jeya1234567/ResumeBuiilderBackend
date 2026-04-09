import { Request,Response,NextFunction } from "express";
import * as userService from '../services/user.service';
import { User } from "../types/user.types";


export const registerUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body;
        const token=await userService.registerUser({email, password} as User);
       res.cookie('token',token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 30 * 60 * 1000 // 30 minutes
       }).status(201).json({
        message: "User registered successfully"
       });

    } catch (error :any) {
        next(error);
    }
}

export const checkUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body;
        console.log({email, password});
        const token = await userService.CheckUser({email, password} as User);   
           res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 30 * 60 * 1000 // 30 minutes
           })
           .status(200).json({
               message: "User authenticated successfully"
           });
    } 
    catch (error :any) {
        next(error);
    }   
}

export const logout = (req: Request, res: Response) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
    }).status(200).json({
        message: "User logged out successfully"
    });
}   

export const checkAuthentication = (req: Request, res: Response) => {
   try{
     const token = req.cookies.token;
     if (!token) {
        return res.status(200).json({ authenticated: false });
     }
        res.status(200).json({ authenticated: true });
   }
   catch(error:any){
    res.status(401).json({ authenticated: false });
   }
  
}