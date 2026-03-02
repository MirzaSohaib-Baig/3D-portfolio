import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  redux,
  html,
  css,
  javascript,
  tailwind,
  nodejs,
  mongodb,
  figma,
  docker,
  ds,
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
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { FaGithub, FaLinkedinIn, FaBriefcase  } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const contactLinks = [
  { icon: MdMail, 
    label: "sohaibbaig329@gmail.com",
    href: "mailto:sohaibbaig329@gmail.com" },
  { icon: FaGithub,
    label: "github.com/MirzaSohaib-Baig",
    href: "https://github.com/MirzaSohaib-Baig" },
  { icon: FaLinkedinIn,
    label: "linkedin/mirzasohaibbaig",
    href: "https://linkedin.com/in/mirzasohaibbaig" },
];

const navLinks = [
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

const footer = [
  {
    id: "github",
    title: "GitHub",
    link: "https://github.com/MirzaSohaib-Baig",
    icon: FaGithub,
  },
  {
    id: "upwork",
    title: "Upwork",
    link: "https://www.upwork.com/freelancers/~019fdfa581c54e6376",
    icon: SiUpwork,
  },
  {
    id: "fiverr",
    title: "Fiverr",
    link: "https://www.fiverr.com/users/sohaib_baig9000/seller_dashboard",
    icon: TbBrandFiverr,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/sohaib-baig-86983a250/",
    icon: FaLinkedinIn,
  },
  {
    id: "etech",
    title: "Business",
    link: "https://excel.etech.today",
    icon: FaBriefcase,
  },
];


const services = [
  {
    title: "Web Developer",
    icon: web,
    desc: "I create responsive and visually appealing websites using React.js, Tailwind CSS, and other modern technologies to deliver seamless user experiences.",
  },
  {
    title: "React Native Developer",
    icon: mobile,
    desc: "I build cross-platform mobile applications using React Native, ensuring smooth performance and a native-like user experience on both iOS and Android devices.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    desc: "I develop robust and scalable backend systems using Node.js, Express, and databases like MongoDB and PostgreSQL to support seamless frontend functionality.",
  },
  {
    title: "Ethical Hacker",
    icon: creator,
    desc: "I conduct ethical hacking and penetration testing to identify vulnerabilities in web applications and systems, helping businesses enhance their security posture.",
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
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Dimensional Sys",
    icon: ds,
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
    num: "01",
    tag: "Full Stack",
    description:
      "Web-based platform that has a chatbot that analyzes conversations to identify anxiety types like GAD or PTSD and provides forms to assess severity, offering users insights into their mental health.",
    tech: ["React", "FastAPI", "MongoDB", "Tailwind"],
    media: [
      aipsychologist,
      aipsychologistvideo
    ],
    source_code_link: "https://github.com/MirzaSohaib-Baig",
    live_link: "https://aipsychologist.vercel.app/",
  },
  {
    name: "Karma Aura",
    num: "02",
    tag: "Full Stack",
    description:
      "Karma Aura is an AI-powered content platform that lets users create and publish blogs, images, and videos across social media using OpenAI, HeyGen, and Aryshare.",
      tech: ["React", "FastAPI", "OpenAI", "HeyGen", "Aryshare", "Tailwind"],
    media: [
      karmaaura,
      karmaauravideo
    ],
    // source_code_link: "https://github.com/MirzaSohaib-Baig",
    live_link: "https://karmaaura.com/",
  },
  {
    name: "AI Genius",
    num: "03",
    tag: "Full Stack",
    description:
      "This is a Rasa-powered educational chatbot built with Next.js and Chakra UI that helps users explore top institutes, university courses, and solve basic math queries.",
    tech: ["Next.js", "Rasa", "Tailwind CSS", "Chakra UI"],
    media: [
      aigenius,
      aigeniusvideo
    ],
    source_code_link: "https://github.com/MirzaSohaib-Baig",
    live_link: "https://aigenius.vercel.app/",
  },
  {
    name: "To Clinic",
    num: "04",
    tag: "Frontend",
    description:
      "T.O. Clinic is a leading orthopedic center in Karachi specializing in joint, spine, and sports injury care, with a WordPress-based website for easy appointments and treatment info.",
    tech: ["WordPress", "Elementor", "Frontend"],
    media: [
      toclinic,
      toclinicvideo
    ],
    // source_code_link: "https://github.com/MirzaSohaib-Baig",
    live_link: "https://toclinic.net/",
  },
];

export { contactLinks, navLinks, footer, services, technologies, experiences, testimonials, projects };