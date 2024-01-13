import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaRebel } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/intelligent.jpg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/iot.jpg";
import eyeImage from "@/public/eyeimage.jpeg"
import movieImg from "@/public/Movieimg.jpg"
import attendanceImg from "@/public/attendenceSys.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern Software Engineer",
    location: "Axiata Digital Labs",
    description:
      "I worked in several projects including Dialog RPA projects and AXI Machine Learning projects. I had the chance to experience the technologies such as Docker, ActiveMQ. I used several programming languages and frameworks and libraries. Mainly they are, Python, Java(Spring Boot), JavaScript. I was able to experienced the amazing culture of the Axiata Digital Labs and working under the supervising of giants in the IT industry",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Dec- 2023 June",
  },
  {
    title: "Back-End Developer",
    location: "Part Time",
    description:
      "I worked as a Back-end developer in part time. I also upskilled to the full stack and i was able to sharp my Back-end knowladge",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Freelancer Developer",
    location: "Full Time",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, .NET, Springboot, SQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Freelancer Machine Learning Engineer",
    location: "Full Time",
    description:
      "Machine Learning is in the top of my favourite list. Hense i started working as a freelance ML solution developer. I started my machine learning career as a freelancer with the newest technologies.t. I'm using Python, TensorFlow, PyTorch and Keras. I'm currently studying and applying the concepts of Big data pipelines to use in Business processes and to feed to ML algorithms/Models. I'm enjoying with this and more to go...!",
    icon: React.createElement(FaRebel),
    date: "2023 - present",
  }
] as const;

export const projectsData = [
  {
    title: "Eye Diseases Detection",
    description:
      "Final Year Research Project. Identify major eye diseases with their sub types",
    tags: ["Python", "TensorFlow", "openCV", "Sklearn", "Keras"],
    imageUrl: eyeImage,
  },
  {
    title: "LearnX",
    description:
      "LMS designed to manage all aspects of online education. User-friendly course creation and interactive content delivery and progress tracking.",
    tags: ["React(TS)", "Tailwind", ".NET", "MongoDB", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "IoT Project",
    description:
      "IoT project that able to send sensor reading from Aruino Nano to ESP32 throught wireless communication and update real-time database.",
    tags: ["Arduino", "ESP32", "FireBase"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Movies Recommendation System",
    description:
      "Machine Learning project that recommend movies to the users with their interactions. Used open source movies datasets.",
    tags: ["Python", "TensorFlow", "Keras"],
    imageUrl: movieImg,
  }
  ,
  {
    title: "WM Attendance Management System",
    description:
      "Industry based project. Biometric ways to calculate attendance and accordingly manage the HR tasks and do the employee related analytical tasks",
    tags: [".Net", "React", "React Native",  "MySQL"],
    imageUrl: attendanceImg,
  }


] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Vue js",
  "MsSql",
  "MongoDB",
  "Redux",
  "MySQL",
  ".NET",
  "SpringBoot",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Keras",
  "MatLab",
  "Docker",
  "Kubernetes",
  "Firebase",
  "AWS",
  "Azure",
  "Git",
] as const;
