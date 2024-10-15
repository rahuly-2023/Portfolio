import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
} from "../assets";







export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#project',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
    {
      id: 5,
      name: 'Resume',
      href: '#resume',
    },
    {
      id: 6,
      name: 'Social',
      href: '#social',
    }
  ];


  export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];

  
  
  export const myProjects = [
    {
      title: 'Invite Zone',
      desc: 'This is a full-stack system for bulk email invitations with QR codes, enabling seamless check-ins and reducing entry times for events. The system also features an automated email notification system, bulk email import functionality via CSV.',
    subdesc:
      'Key achievements include increase in attendee engagement and timely responses, and an 80% reduction in manual data entry time. The system ensures secure check-in processes and protects event security by preventing duplicate check-ins and unauthorized access in real-time.',
      href: 'https://invite-zone.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Node.js',
          path: 'src/assets/tech/nodejs.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: 'src/assets/tech/mongodb.png',
        },
      ],
    },
    {
      title: 'Converse',
      desc: 'Converse is a sophisticated chat application that leverages webSocket technology to facilitate real-time, bi-directional communication between users and the server.',
      subdesc:
        'The application enhances user interaction by incorporating online/offline status indicators, ensuring users are aware of their contacts availability. It offers persistent chat history storage through MongoDB, allowing users to revisit previous conversations. Additionally, Converse includes a feature for deleting messages, empowering users to manage their chat content effectively. User authentication is secured using bcrypt, safeguarding sensitive information through robust password management.',
      href: 'https://converse-uzi2.onrender.com/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'src/assets/tech/css.png',
        },
        {
          id: 3,
          name: 'Node.js',
          path: 'src/assets/tech/nodejs.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: 'src/assets/tech/mongodb.png',
        },
      ],
    },
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };