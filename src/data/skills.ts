export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming & Computer Science",
    skills: [
      "Java",
      "C++",
      "Python",
      "C",
      "C#",
      "TypeScript",
      "Data Structures",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },

  {
    id: "web",
    name: "Web Technologies",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
  },

  {
    id: "ai",
    name: "Generative AI & AI Tools",
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "Large Language Models",
      "AI Tools",
      "AI-assisted Development",
    ],
  },

  {
    id: "data",
    name: "Data & Databases",
    skills: [
      "SQL",
      "MySQL",
      "Data Analysis",
      "Data Mining",
      "Process Mining",
    ],
  },

  {
    id: "testing",
    name: "Testing & Quality",
    skills: [
      "Selenium WebDriver",
      "Test Automation",
      "Software Testing",
      "Debugging",
    ],
  },

  {
    id: "cloud",
    name: "Cloud & Emerging Technologies",
    skills: [
      "AWS",
      "Cloud Computing",
      "Generative AI",
    ],
  },

  {
    id: "tools",
    name: "Tools & Development Environment",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "Eclipse",
      "Linux",
    ],
  },

  {
    id: "security",
    name: "Security & Networking",
    skills: [
      "Cryptography",
      "Computer Networks",
      "Network Security Fundamentals",
    ],
  },

  {
    id: "it",
    name: "IT & Service Management",
    skills: [
      "ServiceNow",
      "Perceive",
      "Okta Administration",
      "SCCM",
      "Active Directory",
    ],
  },

  {
    id: "professional",
    name: "Professional & Creative Skills",
    skills: [
      "Technical Writing",
      "Creative Writing",
      "Communication",
      "Problem-Solving",
      "Analytical Thinking",
      "Team Leadership",
      "Prioritization",
      "Adaptability",
      "Continuous Learning",
    ],
  },
];