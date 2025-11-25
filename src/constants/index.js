import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  figma,
  docker,
  dimensionalsys,
  dequetech,
  vapourai,
  python,
  fastapi,
  wordpress,
  aigenius,
  aigeniusvideo,
  aipsychologist,
  aipsychologistvideo,
  karmaaura,
  karmaauravideo,
  toclinic,
  toclinicvideo,
  git,
  typescript,
  postgresql,
  haris,
  rimmel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ethical Hacker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Dimensional Sys",
    icon: dimensionalsys,
    iconBg: "#383E56",
    date: "December 2023 - September 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Deque Tech",
    icon: dequetech,
    iconBg: "#E6DEDD",
    date: "October 2024 - January 2025",
    points: [
      "Contract-based full stack developer for this company.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Vapour AI",
    icon: vapourai,
    iconBg: "#383E56",
    date: "January 2025 - March 2025",
    points: [
      "Contract-based frontend developer for this company.",
      "Developing frontend web applications using HTML, CSS, and JavaScript for Flask Template.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sohaib built the core of our Karma Aura platform flawlessly. His integration of OpenAI, HeyGen, and Aryshare made content creation and publishing incredibly smooth. A truly reliable developer.",
    name: "Syed Muhammad Haris",
    designation: "CEO",
    company: "Deque Tech",
    image: haris,
  },
  {
    testimonial:
      "The frontend of AI Matchic came out clean, smooth, and fully responsive thanks to Sohaib. He took a simple template and delivered a polished user experience. Highly recommended!",
    name: "Syed Muhammad Rimmel Asghar",
    designation: "CEO",
    company: "Vapour AI",
    image: rimmel,
  },
];


const projects = [
  {
    name: "AI Psychologist",
    description:
      "Web-based platform that has a chatbot that analyzes conversations to identify anxiety types like GAD or PTSD and provides forms to assess severity, offering users insights into their mental health.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    media: [
      aipsychologist,
      aipsychologistvideo
    ],
    source_code_link: "https://github.com/MirzaSohaib-Baig",
  },
  {
    name: "Karma Aura",
    description:
      "Karma Aura is an AI-powered content platform that lets users create and publish blogs, images, and videos across social media using OpenAI, HeyGen, and Aryshare.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "festapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "blue-text-gradient",
      },
    ],
    media: [
      karmaaura,
      karmaauravideo
    ],
    // source_code_link: "https://github.com/MirzaSohaib-Baig",
  },
  {
    name: "AI Genius",
    description:
      "This is a Rasa-powered educational chatbot built with Next.js and Chakra UI that helps users explore top institutes, university courses, and solve basic math queries.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "rasa",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "chakraui",
        color: "blue-text-gradient",
      },
    ],
    media: [
      aigenius,
      aigeniusvideo
    ],
    source_code_link: "https://github.com/MirzaSohaib-Baig",
  },
  {
    name: "To Clinic",
    description:
      "T.O. Clinic is a leading orthopedic center in Karachi specializing in joint, spine, and sports injury care, with a WordPress-based website for easy appointments and treatment info.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "frontend",
        color: "pink-text-gradient",
      },
    ],
    media: [
      toclinic,
      toclinicvideo
    ],
    // source_code_link: "https://github.com/MirzaSohaib-Baig",
  },
];

export { services, technologies, experiences, testimonials, projects };