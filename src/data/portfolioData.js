export const personalInfo = {
  name: "Harsh Prajapati",
  title: "MERN Stack Developer",
  roles: [
    "MERN Stack Developer",
    "Software Engineer",
    "Debug Technician",
    "Project Manager",
    "BCA Student",
    "Problem Solver",
  ],
  tagline: "Building tomorrow's web with today's code.",
  summary:
    "BCA student skilled in C++, OOP, Linux kernel modules, and software development. Experienced in e-commerce and web design, with an interest in AI and AGI development, seeking to apply technical and business skills in a dynamic career.",
  location: "Surat, Gujarat, India",
  email: "harshkaklotar09@gmail.com",
  phone: "+91 7575826485",
  github: "https://github.com/harsh3156",
  linkedin: "https://linkedin.com/in/oreoharsh",
  avatar: "HP",
};

export const skills = [
  { name: "MERN Stack", level: 85, category: "Framework", icon: "SiMongodb" },
  { name: "React.js", level: 85, category: "Frontend", icon: "SiReact" },
  { name: "Node.js", level: 80, category: "Backend", icon: "SiNodedotjs" },
  { name: "C++ / OOP", level: 90, category: "Language", icon: "SiCplusplus" },
  { name: "JavaScript", level: 82, category: "Language", icon: "SiJavascript" },
  { name: "SQL", level: 75, category: "Database", icon: "SiMysql" },
  { name: "GitHub", level: 88, category: "DevOps", icon: "SiGithub" },
  { name: ".NET", level: 60, category: "Framework", icon: "SiDotnet" },
  { name: "Linux / Kernel", level: 70, category: "System", icon: "SiLinux" },
  { name: "Project Management", level: 85, category: "Soft Skill", icon: "MdManageAccounts" },
  { name: "Debugging", level: 90, category: "Skill", icon: "MdBugReport" },
  { name: "Trello / Jira", level: 80, category: "Tools", icon: "SiTrello" },
];

export const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Express", color: "#ffffff" },
  { name: "C++", color: "#00599C" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "GitHub", color: "#f0f6fc" },
  { name: "Linux", color: "#FCC624" },
  { name: "SQL", color: "#4479A1" },
  { name: ".NET", color: "#512BD4" },
  { name: "Jira", color: "#0052CC" },
  { name: "Trello", color: "#0079BF" },
];

export const experience = [
  {
    id: 1,
    role: "Software Developer",
    company: "Own Project",
    location: "Surat, GJ, India",
    period: "2023 – Present",
    type: "Self-Directed",
    description:
      "Managed complex IT projects with a focus on timing, functionality, and cost efficiency.",
    highlights: [
      "Developed efficient, scalable C++ applications following best practices in object-oriented programming (OOP).",
      "Collaborated in teams to design, test, and implement software solutions, ensuring high-quality performance and user experience.",
      "Applied data structures and algorithms to solve complex computational problems.",
    ],
    tags: ["C++", "OOP", "Software Design", "Testing"],
    color: "#00f5ff",
  },
  {
    id: 2,
    role: "Project Manager",
    company: "Own Project",
    location: "Surat, GJ, India",
    period: "2023 – Present",
    type: "Self-Directed",
    description:
      "Directed project planning and execution ensuring project goals and requirements were met.",
    highlights: [
      "Led cross-functional teams to deliver projects on time, within scope, and under budget, ensuring alignment with client requirements and business goals.",
      "Managed project timelines, resources, and risks using tools like Trello and Jira to track progress and resolve issues.",
      "Consistently produced clear documentation, emails, and reports, making complex information accessible to different audiences.",
    ],
    tags: ["Trello", "Jira", "Leadership", "Documentation"],
    color: "#8b5cf6",
  },
  {
    id: 3,
    role: "Debug Technician",
    company: "Own Project",
    location: "Surat, GJ, India",
    period: "2023 – Present",
    type: "Self-Directed",
    description:
      "Skilled in identifying and resolving software and hardware issues, collaborating with teams to enhance system performance and stability.",
    highlights: [
      "Identified and resolved software and hardware issues by analyzing system logs, running diagnostic tests, and troubleshooting errors.",
      "Focused on troubleshooting and fixing software and hardware issues to optimize system performance and ensure reliability.",
      "Collaborated with cross-functional teams to diagnose complex system failures under tight deadlines.",
    ],
    tags: ["Debugging", "System Logs", "Diagnostics", "Performance"],
    color: "#f59e0b",
  },
];

export const education = [
  {
    degree: "Bachelor's Degree in Computer Application (BCA)",
    institution: "Veer Narmad South Gujarat University",
    location: "Surat, GJ, India",
    period: "2023 – Present",
    description:
      "Pursuing BCA with focus on software development, data structures, algorithms, and modern web technologies.",
    skills: ["C++", "Data Structures", "DBMS", "Web Development", "OOP"],
    gpa: "In Progress",
    color: "#00f5ff",
  },
];

export const projects = [
  {
    id: 1,
    title: "Scalable C++ Application Suite",
    description:
      "Developed a suite of efficient, scalable C++ applications following best practices in OOP. Engineered for high-performance computation and modular design.",
    tech: ["C++", "OOP", "Data Structures", "Algorithms"],
    highlights: ["Modular Architecture", "Performance Optimized", "Unit Tested"],
    color: "#00f5ff",
    icon: "⚡",
    status: "Completed",
  },
  {
    id: 2,
    title: "Project Management Dashboard",
    description:
      "Built a full project tracking system with real-time task management, timeline visualization, and resource allocation features using modern web technologies.",
    tech: ["React", "Node.js", "MongoDB", "Trello API"],
    highlights: ["Real-time Updates", "Resource Tracking", "Multi-team Support"],
    color: "#8b5cf6",
    icon: "📋",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Linux Kernel Module",
    description:
      "Designed and implemented a custom Linux kernel module for enhanced system monitoring and performance profiling, leveraging low-level system programming.",
    tech: ["C", "Linux Kernel", "Shell Script", "System Programming"],
    highlights: ["Kernel-Level Access", "Performance Profiling", "System Monitoring"],
    color: "#f59e0b",
    icon: "🐧",
    status: "Completed",
  },
  {
    id: 4,
    title: "E-commerce Web Platform",
    description:
      "Full-stack e-commerce application with product management, cart system, user authentication, and order tracking built on the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    highlights: ["JWT Auth", "Payment Integration", "Admin Dashboard"],
    color: "#10b981",
    icon: "🛒",
    status: "In Progress",
  },
];

export const strengths = [
  {
    title: "Creative Problem Solving",
    desc: "Utilize creative, out-of-the-box solutions to tackle complex engineering challenges.",
    icon: "💡",
    color: "#00f5ff",
  },
  {
    title: "Strong Leadership",
    desc: "Experienced in leading and mentoring teams, resulting in highly efficient project execution.",
    icon: "🎯",
    color: "#8b5cf6",
  },
  {
    title: "Efficient Resource Allocation",
    desc: "Managed complex IT projects with focus on timing, functionality, and cost efficiency.",
    icon: "⚙️",
    color: "#f59e0b",
  },
];

export const languages = [
  { name: "Gujarati", level: "Proficient", percent: 95 },
  { name: "Hindi", level: "Advanced", percent: 80 },
  { name: "English", level: "Proficient", percent: 75 },
];

export const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technologies", value: 12, suffix: "+" },
  { label: "GitHub Repos", value: 8, suffix: "+" },
  { label: "Years Learning", value: 2, suffix: "+" },
];
