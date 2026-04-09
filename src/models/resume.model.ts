import { EducationDetails, ExperienceDetails, PersonalDetails, ProjectDetails } from "../types/resume.types";
import pool from "../config/db";


export const addPersonalDetails = async (details: PersonalDetails, userId: number) => {
console.log('Adding personal details for user ID:', userId);

  const result: any = await pool.execute( 
            'CALL sp_save_personal_details(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [userId, details.id, details.name, details.title, details.email, details.phone, details.location, details.linkedIn,details.summary, details.templateId]
        );
        const resume_id = result?.[0]?.[0]?.[0]?.resume_Id ?? result?.[0]?.[0]?.resume_Id ?? result?.[0]?.id;
        console.log('Personal details added with resume ID:', resume_id);
        return resume_id;
    }

export const addEducationDetails = async (educationDetails: EducationDetails[], resumeId: number) => {

  console.log('Adding education details for resume ID:', resumeId, 'with payload:', educationDetails); 
    const result = await pool.execute(
        'CALL sp_save_education_details(?, ?)',
        [resumeId, JSON.stringify(educationDetails)] 
    );  
};

export const addExperienceDetails = async (experienceDetails: ExperienceDetails[], resumeId: number) => {

    console.log('Adding experience details for resume ID:', resumeId, 'with payload:', experienceDetails);  
      const result = await pool.execute(
          'CALL sp_save_experience_details(?, ?)',
          [resumeId, JSON.stringify(experienceDetails)] 
      );  
  };

export const addProjectsDetails = async (projectDetails: ProjectDetails[], resumeId: number) => {

    console.log('Adding project details for resume ID:', resumeId, 'with payload:', projectDetails);
      const result = await pool.execute(
          'CALL sp_save_projects_details(?, ?)',
          [resumeId, JSON.stringify(projectDetails)] 
      );  
  };  

export const addTechnicalDetails = async (technicalDetails: string[], resumeId: number) => {

    console.log('Adding technical details for resume ID:', resumeId, 'with payload:', JSON.stringify(technicalDetails));
      const result = await pool.execute(
          'CALL sp_save_technical_details(?, ?)',
          [resumeId, JSON.stringify(technicalDetails)] 
      );  
  };