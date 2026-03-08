import type { ResumeData } from "../types/resume";

export const resumeData: ResumeData = {
  personal: {
    initials: "JD",
    name: "John Doe",
    title: "Full Stack Developer",
    contact: {
      email: "john.doe@email.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johndoe",
      github: "github.com/johndoe",
    },
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 88 },
      { name: "CSS/SASS", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
    ],
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Fluent" },
      { name: "French", level: "Intermediate" },
    ],
  },
  summary:
    "Innovative Full Stack Developer with 5+ years of experience building scalable web applications and leading development teams. Expertise in modern JavaScript frameworks, cloud architecture, and agile methodologies. Passionate about creating elegant solutions to complex problems and mentoring junior developers. Proven track record of delivering high-quality software solutions that drive business growth and improve user experience.",
  experience: [
    {
      jobTitle: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      date: "January 2021 - Present",
      description: [
        "Led development of a microservices-based e-commerce platform serving 100K+ daily users, resulting in 35% increase in conversion rates",
        "Reduced application load time by 40% through code optimization, lazy loading, and implementing Redis caching strategies",
        "Mentored team of 5 junior developers, conducted weekly code reviews, and established best practices documentation",
        "Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 60% and eliminating production errors",
        "Architected RESTful APIs handling 1M+ requests daily with 99.9% uptime",
      ],
    },
    {
      jobTitle: "Junior Web Developer",
      company: "StartUp Co.",
      date: "March 2018 - May 2019",
      description: [
        "Built and maintained company website using HTML5, CSS3, and vanilla JavaScript with focus on performance",
        "Implemented responsive design principles ensuring seamless experience across all devices and browsers",
        "Assisted in database design and optimization for MySQL databases, improving query performance by 30%",
        "Resolved 50+ bug reports monthly and implemented feature requests using Jira for project tracking",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      date: "September 2014 - May 2018",
      details: [
        [
          { text: "GPA: 3.8/4.0", bold: true },
          { text: " | Dean's List (All Semesters)" },
        ],
        [
          { text: "Relevant Coursework:", bold: true },
          {
            text: " Data Structures & Algorithms, Web Development, Database Systems, Software Engineering, Computer Networks, Machine Learning, Operating Systems",
          },
        ],
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      year: 2022,
    },
    { name: "Employee of the Year", issuer: "Tech Solutions Inc.", year: 2022 },
    {
      name: "Hackathon Winner - Best Innovation",
      issuer: "Bay Area Tech Meetup",
      year: 2021,
    },
    {
      name: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      year: 2020,
    },
  ],
};
