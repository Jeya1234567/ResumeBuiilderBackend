import { addEducationDetails, addExperienceDetails, addPersonalDetails, addProjectsDetails, addTechnicalDetails, getTemplatesFromDB, getThemesFromDB } from "../models/resume.model";
import { PersonalDetails,EducationDetails, ExperienceDetails, ProjectDetails } from "../types/resume.types";

export const savePersonalDetails = async (details: PersonalDetails, userId: number) => {
    try {
        return await addPersonalDetails(details, userId);
    } catch (error) {
        console.error('Add personal details failed:', error);
        throw error;
    }
};

export const saveEducation = async (educationDetails: EducationDetails[], resumeId: number) => {
    try {
        console.log('Saving education details for resume ID:', resumeId, 'with payload:', educationDetails);    
        return await addEducationDetails(educationDetails, resumeId);
    } catch (error) {
        console.error('Add education details failed:', error);
        throw error;
    }
};

export const saveExperience = async (experienceDetails: ExperienceDetails[], resumeId: number) => {
    try {
        console.log('Saving experience details for resume ID:', resumeId, 'with payload:', experienceDetails);    
            return await addExperienceDetails(experienceDetails, resumeId);
    } catch (error) {
        console.error('Add experience details failed:', error);
        throw error;
    }
};

export const saveProjects = async (projectDetails: ProjectDetails[], resumeId: number) => {
    try {
        console.log('Saving project details for resume ID:', resumeId, 'with payload:', projectDetails);    
            return await addProjectsDetails(projectDetails, resumeId);
    } catch (error) {
        console.error('Add project details failed:', error);
        throw error;
    }
};

export const saveTechnical = async (technicalDetails: string[], resumeId: number) => {
    try {
        console.log('Saving technical details for resume ID:', resumeId, 'with payload:', technicalDetails);    
            return await addTechnicalDetails(technicalDetails, resumeId);
    } catch (error) {
        console.error('Add technical details failed:', error);
        throw error;
    }
};

export const getTemplates = async () => {
    try {
        return await getTemplatesFromDB();
    } catch (error) {
        console.error('Get templates failed:', error);
        throw error;
    }
}

export const getThemes = async () => {
    try {
        return await getThemesFromDB();
    } catch (error) {
        console.error('Get themes failed:', error);
        throw error;
    }
}