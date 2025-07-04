import { Project, Skill, Social } from './types';

export interface PortfolioConfig {
  siteMetadata: SiteMetadata;

  navigation: NavigationConfig;

  sections: {
    home: HomeSection;
    about: AboutSection;
    projects: ProjectsSection;
    skills: SkillsSection;
    connect: ConnectSection;
  };

  footer: FooterConfig;
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
}

export interface NavigationConfig {
  logo: {
    text: string;
  };
  links: Array<{
    href: string;
    label: string;
  }>;
}

export interface HomeSection {
  greeting: string;
  name: string;
  typingTexts: string[];
  description: string;
  scrollIndicatorText: string;
}

export interface AboutSection {
  title: string;
  subtitle: string;
  bio: string[];
  details: Array<{
    label: string;
    value: string;
  }>;
  qualities: Array<{
    icon: string;
    title: string;
    description: string;
    gradient: string;
  }>;
}

export interface ProjectsSection {
  title: string;
  subtitle: string;
  description: string;
  projects: Project[];
  viewMoreButton: {
    label: string;
    url: string;
  };
}

export interface SkillsSection {
  title: string;
  subtitle: string;
  description: string;
  categories: Skill[];
}

export interface ConnectSection {
  title: string;
  subtitle: string;
  description: string;
  socials: Social[];
}

export interface FooterConfig {
  copyright: string;
  tagline: string;
}
