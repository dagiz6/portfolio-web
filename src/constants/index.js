import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  mySql,
  php,
  bootstrap,
  express,
  netflix,
  donation,
  Emenu,
  tictac,
  weather,
  event,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "javascript", icon: javascript },
  { title: "C++", icon: cpp },
  { title: "php", icon: php },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Rect JS", icon: reactjs },
  { name: "bootStrap", icon: bootstrap },
  { name: "expressJs", icon: express },
  { name: "Node JS", icon: nodejs },
  { name: "mySql", icon: mySql },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  {
    title: "Mathwork Ai Virtual Intern",
    company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
];

export const projects = [
  {
    name: "Netflix Clone",
    description:
      "A responsive Netflix-inspired streaming platform built with React, featuring user authentication, movie browsing, and trailer previews. Integrated Firebase for authentication and TMDB API for dynamic content.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Axios", color: "green-text-gradient" },
      { name: "Node", color: "pink-text-gradient" },
      { name: "Movies API by TMDB", color: "yellow-text-gradient" },
    ],
    image: netflix,
    source_code_link: "https://github.com/dagiz6/netflix-clone",
  },
  {
    name: "Donation App",
    description:
      " A secure donation platform developed with React, allowing users to contribute seamlessly via Chapa payment gateway. Features real-time transaction tracking and a user-friendly UI.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node", color: "green-text-gradient" },
      { name: "Payment integration with chapa", color: "white-text-gradient" },
    ],
    image: donation,
    source_code_link: "https://github.com/dagiz6/donation-web-app",
  },
  {
    name: "E-menu",
    description:
      "A digital restaurant menu built with React, offering an interactive interface for browsing food items. Includes category filtering, search functionality, and an elegant UI.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Props", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
    ],
    image: Emenu,
    source_code_link:
      "https://github.com/dagiz6/E-menu",
  },
  {
    name: "Weather App",
    description:
      "A minimalistic weather application using vanilla JavaScript, fetching real-time weather data via an API. Displays temperature, humidity, and forecasts with a clean UI.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: weather,
    source_code_link: "https://github.com/dagiz6/PRODIGY_WD_05",
  },
  {
    name: "Tic-Tac-Toe App",
    description:
      "A classic Tic-Tac-Toe game built with JavaScript, featuring interactive gameplay and a simple yet engaging UI. Supports two-player mode with instant win detection.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: tictac,
    source_code_link: "https://github.com/dagiz6/PRODIGY_WD_03",
  },
  {
    name: "Event Registration",
    description:
      `A PHP-based event registration system with secure login/logout functionality. Sends automated email confirmations via EmailJS and manages attendee registrations efficiently.`,
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "EmailJs for sending confirmation email", color: "white-text-gradient" },
    ],
    image: event,
    source_code_link: "https://github.com/dagiz6/event-registration",
  },

];
