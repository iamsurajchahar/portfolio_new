import { ReactElement } from 'react';

export interface Technology {
  name: string;
  color: string;
  icon: string;
}

export interface Skill {
  category: string;
  technologies: Technology[];
}
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  type: string;
  liveLink?: string;
  thumbnail: string;
  gifUrl?: string;
  carouselImages?: string[];
  carouselConfig?: {
    interval?: number;
    infinite?: boolean;
  };
}

export interface Social {
  name: string;

  icon: ReactElement;
  url: string;
  color: string;
}
