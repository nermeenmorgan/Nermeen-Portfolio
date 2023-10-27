import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  citylife,
  edu,
  shop,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Development',
    icon: frontend,
  },
  {
    title: 'Responsive Web Design',
    icon: backend,
  },
  {
    title: 'Version Control and Collaboration',
    icon: ux,
  },
  {
    title: 'MEARN Stack Development',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'React JS Intern',
    company_name: 'Sync Interns',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2023 - Sep 2023',
  },
  {
    title: 'Front-End Developer | Angular JS',
    company_name: 'Instar',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'June 2023 - Aug 2023',
  },

  {
    title: 'MEARN Stack Developer',
    company_name: 'Freelance | remote',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sep 2023 2022 -  Oct 2023',
  },
  {
    title: 'React JS Intern',
    company_name: 'MYM | Make Your Miracle',
    icon: dcc,
    iconBg: '#333333',
    date: 'Aug 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Skill Stream',
    description: 'An E-Learning platform for Computer Science students',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: edu,
    repo: 'https://github.com/nermeenmorgan/SkillStream-E-Learning-website',
    demo: 'https://skill-stream-e-learning-website.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'City Life',
    description:
      'React-Based website that collects information about most of the facilities in Al Rehab city in Egypt and allows user interactions',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: citylife,
    repo: 'https://github.com/nermeenmorgan/CityLife-Web-Platform-React-Node.js-',
    demo: 'https://citylife-client.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Shop-Express',
    description: 'E-commerce responsive app built with React, handling transactions and payment processing using Stripe.',
    tags: [
      // {
      //   name: 'nextjs',
      //   color: 'blue-text-gradient',
      // },
      // {
      //   name: 'supabase',
      //   color: 'green-text-gradient',
      // },
      // {
      //   name: 'css',
      //   color: 'pink-text-gradient',
      // },
    ],
    image:shop,
    repo: 'https://github.com/nermeenmorgan/Shop-Xpress---React-E-Commerce',
    demo: 'https://shop-xpress-rho.vercel.app/',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
