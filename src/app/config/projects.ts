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
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/thumbnail.png',
    carouselImages: [
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/register.png',
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/dashboard.png',
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/create.png',
      'https://raw.githubusercontent.com/PraveenGongada/Shortly/refs/heads/main/frontend/docs/images/delete.png',
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
      'https://raw.githubusercontent.com/PraveenGongada/Catalyst/refs/heads/main/docs/images/deployment-summary.png',
    gifUrl:
      'https://raw.githubusercontent.com/PraveenGongada/Catalyst/refs/heads/main/docs/images/catalyst-demo.gif',
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
      'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/thumbnail.png',
    carouselImages: [
      'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/home.png',
      'https://raw.githubusercontent.com/PraveenGongada/MovieDB/refs/heads/main/docs/images/movie.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
];
