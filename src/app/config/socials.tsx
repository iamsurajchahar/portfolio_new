import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Social } from '../types/types';

export const socials: Social[] = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    url: 'https://github.com/iamsurajchahar',
    color: '#6e7681',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/imsurajchahar/',
    color: '#0077B5',
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    url: 'mailto:contact.chahar@gmail.com',
    color: '#D44638',
  },
  {
    name: 'Twitter',
    icon: <Twitter size={20} />,
    url: 'https://www.x.com/imsurajchahar',
    color: '#1DA1F2',
  },
];
