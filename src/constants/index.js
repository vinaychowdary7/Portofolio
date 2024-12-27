import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software developer with a knack for crafting robust and scalable web applications.I have experience with Data Structures, Java, Express.js, React, and Node.js, especially in the context of web development and data structures. I prefer simple, efficient coding practices and focus on optimal solutions. I'm skilled in MERN stack development and work on projects to deepen my understanding.`;

export const ABOUT_TEXT = `I am a passionate software developer with a knack for crafting robust and scalable web applications.I have experience with Data Structures, Java, Express.js, React, and Node.js, especially in the context of web development and data structures. I prefer simple, efficient coding practices and focus on optimal solutions. I'm skilled in MERN stack development and work on projects to deepen my understanding.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - June 2024",
    role: "Full Stack Development Intern",
    company: "International Institute of Digital Technologies",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with team members to define project requirements and timelines.`,
    technologies: ["Express.js", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "July 2023 - Aug 2023",
    role: "AWS Intern",
    company: "Blackbuck Engineers Pvt Ltd",
    description: ` Applied Amazon Web Services (AWS) concepts to contribute to project development. Guided by a mentor showcasing the ability to learn and implement new technologies. Collaborated effectively as part of a team to design and build the ”Robust End-to-End Architect - 8.2 Tier” project`,
    technologies: ["S3","RDS","DynamoDB","SNS","etc.." ],
  },
  {
    year: "2023 - Present",
    role: "Teaching Team Lead & Web Developer",
    company: "SRKR Coding Club",
    description: ` As a Teaching Team Lead and Tutor for programming languages at SRKR Coding Club, thought - C, Java, DSA courses and mentored instructors. Designed and developed the SRKR Coding Club website, implementing interactive and user-friendly features while collaborating on innovative design elements with club members.`,
    technologies: ["C","Java","DSA","MERN",],
  },
];

export const PROJECTS = [
  {
    title: "TravelDairies",
    image: project1,
    description:
      "Developed a platform for sharing detailed travel experiences, budgets, and must-visit locations to aid in trip planning.",
    technologies: ["MongoDB", "ExpressJS", "React", "Node.js"],
  },
  {
    title: "Metro Navigation System",
    image: project2,
    description:
      "Built a Java-based terminal application showcasing advanced graph data structure utilization and navigation system design expertise.",
    technologies: ["Java", "Data Structures and Algorithms"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["MongoDB", "ExpressJS", "React", "Node.js","Tailwind CSS"],
  },
  {
    title: "A Robust ENd to End Architect",
    image: project4,
    description:
      "Designed an 8.2-tier architecture for efficient storage access across multiple AWS regions and accounts, ensuring seamless interoperability",
    technologies: ["Amazon DynamoDB", "VPC", "EC2", "CloudWatch", "SNS", "IAM", "RDS" , "S3"],
  },
];

export const CONTACT = {
  address: "1-107 Bhusarapalli, Chimakurthy, Andhra Pradesh-523226",
  phoneNo: "+91 93923 33314",
  email: "munnangivinay357@gmail.com",
};
