// src/data/resumeData.js

const resumeData = {
  basicInfo: {
    name: "Kamran Ali",
    title: "Junior Full-Stack Software Developer",
    location: "Batu Caves, Malaysia",
    openTo: "Remote and onsite roles",
    links: {
      github: "https://github.com/kamran0405",
      linkedin: "https://www.linkedin.com/in/kamran-ali-5053b9397",
      // email and phone are in the contact section below (placeholders for now)
    },
  },

  about: {
    summary:
      "I’m Kamran Ali, a junior full‑stack software developer and current student at Sigma School, based in Batu Caves, Malaysia. I focus on building full‑stack websites and applications, and I learn new technologies quickly and adapt easily to new environments. I’ve completed a full‑stack web development bootcamp (STATUS 200) and I’m actively building projects to strengthen my skills. Right now, I’m looking for opportunities where I can gain real‑world experience, contribute to a team, and grow as a full‑stack developer.",
    highlights: [
      "Junior full‑stack developer focused on modern web applications",
      "Student at Sigma School and STATUS 200 bootcamp graduate",
      "Fast learner, adaptable to new tools and environments",
      "Actively building full‑stack projects to gain real‑world skills",
    ],
  },

  skills: {
    frontend: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "React",
      "Bootstrap",
      "React-Bootstrap",
      // Add Tailwind CSS here if you’ve actually used it
    ],
    backend: [
      "Node.js",
      "Express",
    ],
    databases: [
      "Neon (PostgreSQL)",
      "Firebase",
      // You can add other DBs here only if you’ve used them
    ],
    toolsAndOthers: [
      "TablePlus",
      "Git & GitHub",
      "RESTful APIs",
      "npm / yarn",
      // Add VS Code, Postman, etc. if you want
    ],
    softSkills: [
      "Fast learner",
      "Adaptable",
      "Teamwork and communication",
      "Problem-solving",
    ],
  },

  educationAndTraining: [
    {
      institution: "Sigma School",
      program: "Full-Stack Software Development Program",
      role: "Student",
      location: "Malaysia",
      startDate: "November 2, 2025",
      endDate: "Present",
      details: [
        "Currently learning full‑stack web development and building real‑world projects.",
        "Focus on JavaScript, React, Node.js/Express, and modern web development practices.",
      ],
    },
    {
      institution: "Ideas School Malaysia",
      program: "STATUS 200 Full Stack Web Development Bootcamp",
      role: "Bootcamp Graduate",
      location: "Malaysia",
      startDate: "—", // Optional: you can fill if you want
      endDate: "October 14, 2025",
      details: [
        "Completed a 320‑hour intensive full‑stack web development bootcamp.",
        "Covered frontend and backend fundamentals, including modern JavaScript, React, and Node.js/Express.",
      ],
    },
  ],

  certifications: [
    {
      name: "STATUS 200 Full Stack Web Development Bootcamp",
      issuer: "Ideas School Malaysia",
      date: "October 14, 2025",
      details: [
        "Certificate in full‑stack web development after completing a 320‑hour program.",
      ],
      credentialUrl: "", 
      credentialId: "",  
    },
  ],

  
  projects: [
    {
  name: "WorkoutFlow",
  tagline: "A fitness‑themed todo app to plan, track, and manage your workout routine.",
  role: "Developer",
  bullets: [
    "Fitness‑focused todo web app that lets users plan, track, and manage their workout routines.",
    "Built a centered, card‑based UI in React with a purple/green fitness theme, including a light/dark mode toggle.",
    "Implemented full CRUD: create, view, edit on a dedicated page, and delete workout tasks.",
    "Added search, status filter (All/Active/Completed), category filter (Cardio, Strength, Yoga, HIIT, Stretching, Rest), and multiple sort options.",
    "Used React Context and a custom localStorage hook to persist tasks and theme across page refreshes, with no backend required.",
  ],
  techStack: [
    "React",
    "Vite",
    "React Router",
    "Bootstrap 5",
    "CSS",
    "LocalStorage",
    "Netlify",
  ],
  githubUrl: "https://github.com/kamran0405/WorkoutFlow", 
  liveUrl: "https://workoutflow.netlify.app/",      
},
    {
      name: "Project Two Name",
      tagline: "Short one-line description of your second project.",
      role: "Full-Stack Developer",
      bullets: [
        "Describe the problem this project solves or what it’s used for.",
        "Mention key frontend work you did (UI, forms, responsiveness, state management).",
        "Mention key backend work (routes, controllers, business logic).",
        "Highlight any performance, security, or UX improvements you implemented.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "Firebase or Neon",
      ],
      githubUrl: "https://github.com/your-username/your-project-two", // TODO
      liveUrl: "https://your-deployed-project-two.com",               // TODO / optional
    },
    {
      name: "Project Three Name",
      tagline: "Short one-line description of your third project.",
      role: "Full-Stack Developer",
      bullets: [
        "Describe the main functionality or use case.",
        "Explain what you are most proud of in this project (e.g. clean architecture, reusable components).",
        "Mention any third-party APIs, libraries, or services you integrated.",
        "Add anything that shows learning or improvement compared to earlier projects.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "Firebase or Neon",
      ],
      githubUrl: "https://github.com/your-username/your-project-three", // TODO
      liveUrl: "https://your-deployed-project-three.com",               // TODO / optional
    },
  ],

  experience: [
    // If you get internships / freelance later, add objects here:
    // {
    //   title: "Job Title",
    //   company: "Company Name",
    //   location: "City, Country or Remote",
    //   startDate: "Month Year",
    //   endDate: "Month Year or Present",
    //   bullets: [
    //     "Describe what you did and what you achieved.",
    //     "Focus on development tasks, tools, and results.",
    //   ],
    //   techStack: ["React", "Node.js", "etc."],
    // },
  ],

  languages: [
    { name: "English", level: "Fluent" },
    { name: "Urdu/Hindi", level: "Fluent" },
  ],

  interests: [
    "Badminton",
    "Futsal",
    "Chess",
    "Building tech projects",
    "Exploring new technologies",
  ],

  // ===== CONTACT – PLACEHOLDER STRUCTURE =====
  contact: {
    email: "kamran45.dev@gmail.com", // TODO: replace with your real public email
    phone: "+60-102467901",          // TODO: optional, you can leave empty if you don’t want to show it
    location: "Batu Caves, Malaysia",
    openTo: "Remote or onsite full‑stack roles",
  },

  // ===== PAGE / UI PREFERENCES (for your React app) =====
  preferences: {
    navigation: "sidebar", // you chose sidebar navigation
    theme: {
      primaryColors: ["purple", "teal", "cyan"],
      mode: "light", // you can add dark/light toggle later
    },
    animations: "dynamic", // more dynamic but still professional
    responsive: true,      // must be responsive with Bootstrap grid
  },
};

export default resumeData;