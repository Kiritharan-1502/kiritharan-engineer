export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  highlights?: string[];
  size: "large" | "medium" | "small";
  github?: string;
  demo?: string;
  publication?: {
    title: string;
    journal: string;
    details: string;
    authors: string;
    link?: string;
  };
}
export const projects: Project[] = [
  {
    id: "proj-1",
    title: "IoT-Based Waste Monitoring System for Railways",
    description:
      "Final-year project focused on developing an IoT-based system to monitor waste tank fill levels in railway compartments in real time. The system integrates sensors, wireless communication, and Blynk Cloud for remote monitoring, visualization, and automated alerts.",
    tech: [
      "C",
      "Arduino",
      "IR Sensors",
      "Bluetooth",
      "Blynk Cloud",
    ],
    highlights: [
      "Final Year Project",
      "Real-time waste level monitoring",
      "Blynk Cloud dashboard",
      "Remote monitoring and automated alerts",
      "Team Lead",
      "Published Research Paper",
    ],
    size: "large",
    publication: {
      title:
        "A Scalable IoT-Based Solution for Waste Monitoring and Management in Railways",
      journal:
        "Journal of Emerging Technologies and Innovative Research (JETIR)",
      details: "Volume 12, Issue 5 · May 2025 · ISSN: 2349-5162",
      authors:
        "Shakthi Nandini J., Kurra Sandhya, Mithuna P., Sahana C., Chethan C.",
      link: "https://www.jetir.org/view?paper=JETIR2505948",
    },
  },

  {
    id: "proj-2",
    title: "Automation Testing of an E-Commerce Website",
    description:
      "An automated testing project for the Wildcraft e-commerce website covering important user flows such as login, search, product navigation, and add-to-cart functionality.",
    tech: [
      "Java",
      "Selenium WebDriver",
      "Eclipse",
      "XPath",
      "CSS Selectors",
    ],
    highlights: [
      "Login testing",
      "Search and product navigation",
      "Add-to-cart testing",
      "Test script execution and documentation",
      "Team Lead",
    ],
    size: "medium",
  },

  {
    id: "proj-3",
    title: "Healthcare System Portal",
    description:
      "An academic frontend project focused on creating a healthcare portal interface with appointment booking, registration, and login functionality.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "VS Code",
    ],
    highlights: [
      "Appointment booking interface",
      "Registration and login pages",
      "User interface development",
      "UI flow documentation",
    ],
    size: "medium",
  },

  {
    id: "proj-4",
    title: "SDI-12 Environmental Sensor Communication Application",
    description:
      "A C# Windows Forms application developed during an internship at Cellcomm Solutions Ltd. to communicate with SDI-12 environmental sensors through serial ports, supporting real-time data acquisition, parsing, display, and automated periodic readings.",
    tech: [
      "C#",
      "Windows Forms",
      "SDI-12",
      "Serial Communication",
      "Real-Time Data",
    ],
    highlights: [
      "Internship Project",
      "Real-time sensor data acquisition",
      "Serial port communication",
      "Automated periodic readings",
      "Data parsing and display",
    ],
    size: "large",
  },

  {
    id: "proj-5",
    title: "Bus Reservation System",
    description:
      "My first project, A bus reservation system designed to provide a structured way to manage bus and passenger reservation activities, making the booking process more organized and convenient.",
    tech: [
      "Java",
      "SQL",
      "MySQL",
      "C#",
      "Visual Studio"
    ],
    highlights: [
      "Bus reservation management",
      "Passenger booking workflow",
      "Database-driven application",
      "Structured reservation records",
    ],
    size: "medium",
  },
];