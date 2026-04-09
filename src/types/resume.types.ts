export interface PersonalDetails {
    id: number;
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedIn: string;
    summary: string;
    templateId: string;
}

export interface EducationDetails {    
  school: string;
  degree: string;
  field: string;
  start: number;
  end: number;
  grade: string;
}

export interface ExperienceDetails {
  company: string;
  role: string;
  start: string;
  end: string;
  highlights: string;
}

export interface ProjectDetails {
  name: string;
  role: string;
  description: string;
  tech: string;
}