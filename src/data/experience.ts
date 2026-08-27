export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  points: string[];
  techTags: string[];
  iconBg?: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Associate Engineer – IT",
    company: "Allied Digital Services Ltd.",
    duration: "Aug 2025 – Jun 2026",
    location: "Chennai, India | Client: Virtusa",
    points: [
      "Managed incidents and service requests using ServiceNow and Perceive, ensuring accurate documentation, categorization, prioritization, and timely resolution.",
      "Provided IT support for Virtusa users, analyzing system, application, access, and device issues and coordinating with relevant teams when escalation was required.",
      "Supported Microsoft Intune and MDM solutions, including device enrollment, security policy implementation, and device compliance management.",
      "Worked with Google Workspace and Okta Administration to support user access, account management, and enterprise application access.",
      "Managed and maintained IT asset records while supporting UAE users across enterprise systems and devices.",
      "Assisted users with OneDrive and Outlook configuration, troubleshooting access, synchronization, email setup, and file-sharing issues.",
      "Monitored ticket queues and assigned requests to appropriate engineers based on issue type and priority.",
      "Performed technical troubleshooting across hardware, software, network, and mobile devices, including OS installation, application deployment, printer configuration, and domain setup.",
    ],
    techTags: [
      "ServiceNow",
      "Perceive",
      "Microsoft Intune",
      "MDM",
      "Google Workspace",
      "Okta Administration",
      "SCCM",
      "Active Directory",
      "OneDrive",
      "Outlook",
    ],
    iconBg: "bg-blue-600",
  },

  {
    id: "exp-2",
    role: "Software Developer Intern",
    company: "Cellcomm Solutions Ltd.",
    duration: "Mar 2025",
    location: "Bengaluru, India",
    points: [
      "Developed a C# Windows Forms application to communicate with SDI-12 environmental sensors through serial ports.",
      "Implemented real-time data acquisition, parsing, and display for sensor data.",
      "Automated periodic sensor readings, reducing manual data collection effort and improving efficiency.",
      "Collaborated with the engineering team to test, debug, and refine communication modules for reliable device interaction.",
    ],
    techTags: [
      "C#",
      "Windows Forms",
      "SDI-12",
      "Serial Communication",
      "Real-Time Data",
    ],
    iconBg: "bg-purple-600",
  },

  {
    id: "exp-3",
    role: "Cloud Application Developer – OJT",
    company: "Rooman Technologies | VTU",
    duration: "Oct 2024 – Feb 2025",
    location: "Bengaluru, India",
    points: [
      "Completed VTU On-the-Job Training focused on Cloud Computing Fundamentals.",
      "Learned core cloud concepts including virtualization, storage models, compute models, and deployment basics.",
      "Practiced Python programming concepts including loops, functions, lists, dictionaries, and file handling.",
      "Gained introductory knowledge of cloud services, including AWS fundamentals.",
    ],
    techTags: [
      "Cloud Computing",
      "AWS",
      "Python",
      "Virtualization",
      "Cloud Fundamentals",
    ],
    iconBg: "bg-orange-600",
  },

  {
    id: "exp-4",
    role: "Content Writer Intern",
    company: "Reach Skyline",
    duration: "Nov 2023 – Dec 2023",
    location: "Chennai, India",
    points: [
      "Created and edited blog content for digital platforms with a focus on clear, engaging, and audience-oriented writing.",
      "Contributed to marketing content and promotional materials aligned with communication and brand objectives.",
      "Used AI tools and prompt engineering techniques to support content ideation, research, drafting, and refinement.",
      "Explored effective AI prompting approaches to improve content quality, structure, and productivity.",
    ],
    techTags: [
      "Content Writing",
      "Blog Writing",
      "Digital Marketing",
      "AI Tools",
      "Prompt Engineering",
    ],
    iconBg: "bg-pink-600",
  },
];