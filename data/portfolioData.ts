import type {
  Service,
  Testimonial,
  Project,
  SkillBar,
  TimelineItem,
  BlogPost,
  Client,
} from "../types/portfolio";

// ===== Services =====
export const SERVICES: Service[] = [
  {
    icon: "/assets/images/icon-design.svg",
    title: "Graphic design",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    icon: "/assets/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    icon: "/assets/images/icon-app.svg",
    title: "Data Science",
    description: "Professional at Microsoft Office Word, Excel and PowerPoint.",
  },
  {
    icon: "/assets/images/icon-photo.svg",
    title: "Photography & Montage",
    description:
      "I make high-quality photos of any category at a professional level.",
  },
];

// ===== Testimonials (Tools in original project) =====
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Visual Studio Code",
    avatar: "/assets/images/avatar-1.png",
    text: "I usually employ Visual Studio Code (VS Code) as my default code editor due to its performance, versatility, and comprehensive support for modern development patterns. I utilize its Git integration, JavaScript, React, and Python extensions, ESLint and Prettier extensions to make code organized and consistent.",
    date: "Code Editor",
  },
  {
    name: "Adobe Creative Cloud",
    avatar: "/assets/images/avatar-2.png",
    text: "I skillfully employ Adobe Creative Cloud applications, including Photoshop, Illustrator, and Premiere Pro, to edit and create high-quality visual content. My design process values creativity, attention to detail, and meeting project deadlines.",
    date: "Design Suite",
  },
  {
    name: "Microsoft Office 365",
    avatar: "/assets/images/avatar-3.png",
    text: "I am proficient in the use of Microsoft Office 365 tools, including Word, Excel, PowerPoint, and Outlook, for various work and educational purposes. I use Word to create well-organized documents and reports, and Excel to analyze data.",
    date: "Productivity",
  },
  {
    name: "Canva Design",
    avatar: "/assets/images/avatar-4.png",
    text: "I use Canva to design visually appealing content for both digital and print platforms, including social media posts, presentations, posters, and marketing materials. I create clean, professional designs using Canva's templates.",
    date: "Online Design",
  },
];

// ===== Programming Languages =====
export const PROGRAMMING_LANGUAGES: { name: string; url: string }[] = [
  {
    name: "HTML5",
    url: "/assets/icons/tech/html5.svg",
  },
  {
    name: "CSS3",
    url: "/assets/icons/tech/css3.svg",
  },
  {
    name: "JavaScript",
    url: "/assets/icons/tech/javascript.svg",
  },
  {
    name: "TypeScript",
    url: "/assets/icons/tech/typescript.svg",
  },
  {
    name: "TailwindCSS",
    url: "/assets/icons/tech/tailwindcss.svg",
  },
  {
    name: "React",
    url: "/assets/icons/tech/react.svg",
  },
  {
    name: "Next.js",
    url: "/assets/icons/tech/nextjs.svg",
  },
  {
    name: "Vue",
    url: "/assets/icons/tech/vuejs.svg",
  },
  {
    name: "Laravel",
    url: "/assets/icons/tech/laravel.svg",
  },
];

// ===== Clients =====
export const CLIENTS: Client[] = [
  { logo: "/assets/images/logo-1-color.png", alt: "client logo" },
  { logo: "/assets/images/logo-2-color.png", alt: "client logo" },
  { logo: "/assets/images/logo-3-color.png", alt: "client logo" },
  { logo: "/assets/images/logo-4-color.png", alt: "client logo" },
  { logo: "/assets/images/logo-5-color.png", alt: "client logo" },
  { logo: "/assets/images/logo-6-color.png", alt: "client logo" },
];

// ===== Projects =====
export const PROJECTS: Project[] = [
  {
    title: "Finance",
    category: "Web development",
    image: "/assets/images/project-1.jpg",
  },
  {
    title: "Orizon",
    category: "Web development",
    image: "/assets/images/project-2.png",
  },
  {
    title: "Fundo",
    category: "Web design",
    image: "/assets/images/project-3.jpg",
  },
  {
    title: "Brawlhalla",
    category: "Applications",
    image: "/assets/images/project-4.png",
  },
  {
    title: "DSM.",
    category: "Web design",
    image: "/assets/images/project-5.png",
  },
  {
    title: "MetaSpark",
    category: "Web design",
    image: "/assets/images/project-6.png",
  },
  {
    title: "Summary",
    category: "Web development",
    image: "/assets/images/project-7.png",
  },
  {
    title: "Task Manager",
    category: "Applications",
    image: "/assets/images/project-8.jpg",
  },
  {
    title: "Arrival",
    category: "Web development",
    image: "/assets/images/project-9.png",
  },
];

export const PROJECT_CATEGORIES: string[] = [
  "All",
  "Web design",
  "Applications",
  "Web development",
];

// ===== Education Timeline =====
export const EDUCATION: TimelineItem[] = [
  {
    title:
      "Mohammed V University in Rabat, Faculty of Legal, Economic and Social Sciences",
    period: "2020 — 2023",
    description: "baccalaureate +1 on Economy and Management",
  },
  {
    title: "Mohammed V University in Rabat, Faculty of Science",
    period: "2019 — 2020",
    description: "First year of the bachelor's degree in Physics and Chemistry",
  },
  {
    title: "Abdrahmand El Dakhel High school",
    period: "2016 — 2019",
    description: "High School degree of Physics and Chemistry",
  },
];

// ===== Experience Timeline =====
export const EXPERIENCE: TimelineItem[] = [
  {
    title: "Creative director",
    period: "2015 — Present",
    description:
      "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
  },
  {
    title: "Art director",
    period: "2013 — 2015",
    description:
      "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
  },
  {
    title: "Web designer",
    period: "2010 — 2013",
    description:
      "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
  },
];

// ===== Skills =====
export const SKILLS: SkillBar[] = [
  { name: "JavaScript", percentage: 95 },
  { name: "React", percentage: 90 },
  { name: "Node.js", percentage: 88 },
  { name: "CSS/SASS", percentage: 85 },
  { name: "Python", percentage: 80 },
  { name: "SQL", percentage: 85 },
  { name: "Git", percentage: 90 },
  { name: "Docker", percentage: 75 },
  { name: "AWS", percentage: 70 },
];

// ===== Blog Posts =====
export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Design conferences in 2022",
    category: "Design",
    date: "Feb 23, 2022",
    dateTime: "2022-02-23",
    image: "/assets/images/blog-1.jpg",
    text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
  },
  {
    title: "Best fonts every designer",
    category: "Design",
    date: "Feb 23, 2022",
    dateTime: "2022-02-23",
    image: "/assets/images/blog-2.jpg",
    text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
  },
  {
    title: "Design digest #80",
    category: "Design",
    date: "Feb 23, 2022",
    dateTime: "2022-02-23",
    image: "/assets/images/blog-3.jpg",
    text: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
  },
  {
    title: "UI interactions of the week",
    category: "Design",
    date: "Feb 23, 2022",
    dateTime: "2022-02-23",
    image: "/assets/images/blog-4.jpg",
    text: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    title: "The forgotten art of spacing",
    category: "Design",
    date: "Feb 23, 2022",
    dateTime: "2022-02-23",
    image: "/assets/images/blog-5.jpg",
    text: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Design digest #79",
    category: "Design",
    date: "Feb 23, 2022",
    dateTime: "2022-02-23",
    image: "/assets/images/blog-6.jpg",
    text: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
  },
];
