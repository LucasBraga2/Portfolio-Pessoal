
export interface Project {
  title: string;
  description: string;
  link: string;
  status: 'Finalizado' | 'Em Desenvolvimento'; 
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  course: string;
  period: string;
}