import { PortfolioConfig } from '@/app/types/config';
import { socials } from '@/app/config/socials';
import { projects } from '@/app/config/projects';
import { skills } from '@/app/config/skills';

export const portfolioConfig: PortfolioConfig = {
  siteMetadata: {
    title: 'Suraj Singh Chahar',
    description: 'Portfolio website by Suraj',
    author: 'Suraj Singh Chahar',
  },

  navigation: {
    logo: {
      text: 'SS',
    },
    links: [
      { href: 'home', label: 'Home' },
      { href: 'about', label: 'About' },
      { href: 'projects', label: 'Projects' },
      { href: 'skills', label: 'Skills' },
      { href: 'connect', label: 'Connect' },
    ],
  },

  sections: {
    home: {
      greeting: "Hi, I'm",
      name: 'Suraj Singh Chahar',
      typingTexts: [
        'Building digital experiences',
        'Solving complex problems',
        'Creating user-focused apps',
      ],
      description:
        "I'm eager to explore emerging technologies and deepen my understanding of thoughtful, user-focused design principles. My curiosity motivates me to continually learn and apply new skills to create impactful experiences.",
      scrollIndicatorText: 'Scroll to explore',
    },

    about: {
      title: 'About',
      subtitle: 'Me',
      bio: [
        "I'm Suraj Singh Chahar, a Computer Science and Engineering graduate from Vellore Institute of Technology with an 8.5 GPA and over 1 year of professional experience. My expertise lies in full-stack development, application optimization, and efficient deployment practices.",
        "I've worked extensively with technologies including JavaScript, React.js, Node.js, Next.js, Tailwind, Docker, Kubernetes, AWS and Etc.",
        'My achievements include being a finalist in the Hack2Skill Hackathon and being recognized for leadership and teamwork by the Service Selection Board (SSB).',
      ],
      details: [
        { label: 'Location', value: 'Based in Gurgaon' },
        { label: 'Experience', value: '1+ Years Experience' },
      ],
      qualities: [
        {
          icon: 'Rocket',
          title: 'Problem Solver',
          description:
            'I approach complex challenges with analytical thinking and break them down into manageable solutions.',
          gradient: 'from-emerald-500 to-blue-500',
        },
        {
          icon: 'Code',
          title: 'Clean Code Advocate',
          description:
            'I value maintainable, well-structured code that follows best practices and industry standards.',
          gradient: 'from-blue-500 to-violet-500',
        },
        {
          icon: 'Lightbulb',
          title: 'Innovative Thinker',
          description:
            'I constantly explore new technologies and approaches to solve problems more efficiently.',
          gradient: 'from-purple-500 to-indigo-500',
        },
        {
          icon: 'BarChart3',
          title: 'User-Focused',
          description:
            'I prioritize creating intuitive, accessible experiences that meet real user needs.',
          gradient: 'from-indigo-500 to-cyan-500',
        },
      ],
    },

    projects: {
      title: 'My',
      subtitle: 'Projects',
      description:
        "Here's a selection of projects that showcase my skills and passion for building exceptional digital experiences across different platforms.",
      projects: projects,
      viewMoreButton: {
        label: 'View More Projects',
        url: 'https://github.com/PraveenGongada',
      },
    },

    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description:
        "I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.",
      categories: skills,
    },

    connect: {
      title: 'Connect',
      subtitle: 'With Me',
      description:
        'Feel free to connect with me on these platforms to discuss tech, share ideas, or just say hello!',
      socials: socials,
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()}   Suraj Singh Chahar. All rights reserved.`,
    tagline: 'Building Efficient, Scalable, and User-Friendly Web Experiences.',
  },
};

export default portfolioConfig;
