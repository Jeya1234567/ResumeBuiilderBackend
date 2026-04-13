import * as Details from "../services/resume.service";
import { Request, Response, NextFunction } from "express";
import { PersonalDetails } from "../types/resume.types";


export const savePersonalDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('Received request to save personal details'+JSON.stringify(req.body));

        const userId = (req as any).user?.userId as number;
        const details: PersonalDetails = req.body;
        const resume_id = await Details.savePersonalDetails(details, userId);
        res.status(200).json({
            resume_id,
            message: 'Personal details saved successfully' });
    } catch (error) {
        next(error);
    }
};

export const saveEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('Received request to save education details'+JSON.stringify(req.body));
       const resumeId = Number(req.params.resumeId);
       const educationDetails = req.body.items as any || [];
       const result = await Details.saveEducation(educationDetails, resumeId);
       res.status(200).json({
        data: 'valid',
        message: 'Education details saved successfully' });
    } catch (error) {
        next(error);
    }
};

export const saveExperience = async (req: Request, res: Response, next: NextFunction) => {  
    try {
        console.log('Received request to save experience details'+JSON.stringify(req.body));
       const resumeId = Number(req.params.resumeId);
         const experienceDetails = req.body.items as any || [];
         const result = await Details.saveExperience(experienceDetails, resumeId);
         res.status(200).json({
            data: 'valid',
            message: 'Experience details saved successfully' });
    } catch (error) {
        next(error);
    }
};

export const saveProjects = async (req: Request, res: Response, next: NextFunction) => {  
    try {
        console.log('Received request to save project details'+JSON.stringify(req.body));
         const resumeId = Number(req.params.resumeId);
            const projectDetails = req.body.items as any || [];
            const result = await Details.saveProjects(projectDetails, resumeId);
            res.status(200).json({
                data: 'valid',
                message: 'Project details saved successfully' });
    } catch (error) {
        next(error);
    }
};

export const saveTechnical = async (req: Request, res: Response, next: NextFunction) => {  
    try {
        console.log('Received request to save technical details'+JSON.stringify(req.body)); 
            const resumeId = Number(req.params.resumeId);
            const payload = req.body.payload as any || [];
            const result = await Details.saveTechnical(payload, resumeId);
            res.status(200).json({
                data: 'valid',
                message: 'Technical details saved successfully' });
    } catch (error) {
        next(error);
    }   
};

export const getTemplates = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const templates = await Details.getTemplates(); 
        res.status(200).json({ data: templates });
    } catch (error) {
        next(error);
    }
};

export const getThemes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const themes = await Details.getThemes(); 
        res.status(200).json({ data: themes });
    } catch (error) {
        next(error);
    }
};