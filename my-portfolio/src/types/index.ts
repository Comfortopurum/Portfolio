export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    video?: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
  }
  
  export interface Skill {
    category: string;
    items: string[];
  }
  
  export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
  }