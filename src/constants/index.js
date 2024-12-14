import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Hi, I’m Felton Lim, an NUS undergraduate majoring in Information Systems with a minor in Geographic Information Systems (GIS). I have a strong passion for product management, with a focus on front-end development, UI/UX design, and spatial analysis. I’m driven by a curiosity for innovation and strive to create intuitive, user-friendly digital experiences. I’m also eager to explore opportunities in sustainable technology and agritech, where I can apply my skills to tackle real-world challenges.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 - Present",
    role: "Program Management Intern",
    company: " Wavesparks",
    description: "Support program execution, manage CRM systems, and oversee the company's social media presence. Responsibilities include coordinating operations, enhancing participant engagement, and driving online visibility through strategic content creation.",
    technologies: [],
  },
  {
    year: "Oct 2024 - Present",
    role: 'Founder',
    company: "WildScapes",
    description: "Started my own small business selling handcrafted terrariums and plants. Managed operations, from sourcing materials to marketing and sales.",
    technologies: [],
  },
  {
    year: "Sep 2024 - Present",
    role: "UI/UX Designer",
    company: " Google Developer Student Club",
    description: "Designed intuitive user interfaces for a volunteer management system using Figma. Focused on creating user-friendly workflows, wireframes, and interactive prototypes to enhance user experience and streamline volunteer coordination.",
    technologies: [],
  },
  {
    year: "2021 - 2023",
    role: "Human Resource Assistant",
    company: " Ministry of Home Affairs",
    description: "Managed the development of the NS portal system, supported nationwide NS55 project, and facilitated public queries during Meet-the-MP sessions. Processed large datasets and oversaw backend disbursement of monetary credits as part of the initiaive.",
    technologies: [],
  },
  {
    year: "2020 - 2021",
    role: "Coding and Robotics Instructor",
    company: " In3Labs",
    description: 'Delivered coding lessons in Scratch, Python, and Lego Mindstorms to students aged 4 to 16, both in-center and at kindergartens. Revamped program curriculum, managed student progress reports, and facilitated communication with parents to support student development.',
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Social Media Application",
    image: project1,
    description:
      "A functional F&B review social media application with features like creating posts, uploading images, liking, commenting and saving posts and user authentication.",
    technologies: ["React Native", "TailwindCSS", "Firebase", "Expo"],
  },
  {
    title: "Game Review App",
    image: project2,
    description:
      "An application for video game reviews, with features such as posting reviews and giving ratings.",
    technologies: ["React Native", "Expo"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Volunteer Management System (UI/UX Design)",
    image: project4,
    description:
      "Worked with a team to design a platform for managing volunteers and events, with features like user registration, event creation, and volunteer sign-up.",
    technologies: ["Figma"],
  },
];

export const CONTACT = {
  email: "feltonlim@gmail.com",
  telegram: "@feltonn"
};
