export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Language {
  name: string;
  level: string;
}

export interface PersonalInfo {
  initials: string;
  name: string;
  title: string;
  contact: Contact;
  skills: Skill[];
  languages: Language[];
}

export interface Experience {
  jobTitle: string;
  company: string;
  date: string;
  description: string[];
}

interface EducationDetail {
  text: string;
  bold?: boolean;
}

export interface Education {
  degree: string;
  school: string;
  date: string;
  details: EducationDetail[][];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export interface ResumeData {
  personal: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}
