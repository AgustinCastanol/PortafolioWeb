export interface Project {
  id: number;
  image: string;
  title: string;
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  level: 'Basic' | 'Intermediate' | 'Experienced';
}

export interface Experience {
  category: 'Frontend' | 'Backend' | 'Other';
  skills: Skill[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
