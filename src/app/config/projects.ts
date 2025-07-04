import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'JSON Tree Visualizer',
    description:
      'A sleek visualization tool that transforms complex JSON data into interactive graph and tree views for effortless analysis. Simplify, explore, and understand your data with lightning-fast, customizable, and developer-friendly features.',
    tags: ['React', 'Typescript'],
    githubLink: 'https://github.com/iamsurajchahar/Json_Tree',
    liveLink: 'https://jsonhierarchyvisualizer-suuraajs-projects.vercel.app/',
    type: 'Frontend',
    thumbnail:
      'https://raw.githubusercontent.com/iamsurajchahar/portfolio_new/main/docs/images/json1.png',
    carouselImages: [
      'https://raw.githubusercontent.com/iamsurajchahar/portfolio_new/main/docs/images/json1.png',
      'https://raw.githubusercontent.com/iamsurajchahar/portfolio_new/main/docs/images/json2.png',
      'https://raw.githubusercontent.com/iamsurajchahar/portfolio_new/main/docs/images/json3.png',
      'https://raw.githubusercontent.com/iamsurajchahar/portfolio_new/main/docs/images/json4.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 2,
    title: 'AI Resume Shortlister',
    description:
      'AI Resume Shortlister streamlines hiring by analyzing resumes against job descriptions using advanced AI. Built with Next.js, it delivers fast, secure, and scalable candidate shortlisting for modern recruitment.',
    tags: ['NextJs', 'JavaScript/TypeScript'],
    githubLink: 'https://github.com/iamsurajchahar/ai-resume-shortlister',
    liveLink: '',
    type: 'Full Stack',
    thumbnail:
      'https://raw.githubusercontent.com/iamsurajchahar/portfolio_new/main/docs/images/ai-resume-shortlister1.png',
    gifUrl:
      'https://raw.githubusercontent.com/iamsurajchahar/portfolio_new/main/docs/images/ai-resume-shortlister1.png',
  },
  {
    id: 3,
    title: 'Kanban',
    description:
      'Kanban is a modern task management website designed to streamline your workflow. It provides an intuitive and visually appealing way to organize and track tasks efficiently, helping you stay productive and focused.',
    tags: ['React', 'Typescript'],
    githubLink: 'https://github.com/iamsurajchahar/kanban',
    type: 'Frontend',
    thumbnail:
      'https://raw.githubusercontent.com/iamsurajchahar/portfolio_new/main/docs/images/kanban_ss.png',
    carouselImages: [
      'https://raw.githubusercontent.com/iamsurajchahar/portfolio_new/main/docs/images/kanban_ss.png',
      'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/movie.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
];
