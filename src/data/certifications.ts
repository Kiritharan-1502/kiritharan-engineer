export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    date: "May 2026",
    credentialId: "hu7whxu44sm7"
  },
  {
    id: "cert-2",
    name: "IBM RAG and Agentic AI Professional Certificate",
    issuer: "IBM",
    date: "Feb 2026",
    credentialId: "SI7FQPJWN9B8"
  },
  {
    id: "cert-3",
    name: "Claude 101",
    issuer: "Anthropic",
    date: "Mar 2026",
    credentialId: "j5j3epzmjq3k"
  },
  {
    id: "cert-4",
    name: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "Mar 2026",
    credentialId: "edemg8tzz89r"
  },
  {
    id: "cert-5",
    name: "Machine Learning with Python",
    issuer: "IBM",
    date: "Dec 2025",
    credentialId: "ED9KQUKZ7NOP"
  },
  {
    id: "cert-6",
    name: "Advanced RAG with Vector Databases",
    issuer: "IBM",
    date: "Dec 2025",
    credentialId: "1F97N7T20LGZ"
  },
  {
    id: "cert-7",
    name: "Vector Databases for RAG",
    issuer: "IBM",
    date: "Dec 2025",
    credentialId: "N5TYE2J283PM"
  },
  {
    id: "cert-8",
    name: "Fundamentals of Building AI Agents",
    issuer: "Coursera",
    date: "Dec 2025"
  },
  {
    id: "cert-9",
    name: "Agentic AI with LangChain and LangGraph",
    issuer: "IBM",
    date: "Dec 2025"
  },
  {
    id: "cert-10",
    name: "Neo4j Certified Professional",
    issuer: "Neo4j",
    date: "Jun 2025",
    credentialId: "8496df8c"
  },
  {
    id: "cert-11",
    name: "Kubernetes: Your First Project",
    issuer: "LinkedIn",
    date: "Sep 2024"
  },
  {
    id: "cert-12",
    name: "Transformer Models and BERT Model",
    issuer: "Udacity",
    date: "Oct 2023"
  },
  {
    id: "cert-13",
    name: "Academic Process Mining Fundamentals",
    issuer: "Celonis",
    date: "Nov 2023"
  },
  {
    id: "cert-14",
    name: "Accenture Project Management Simulation",
    issuer: "Forage",
    date: "Sep 2024"
  },
  {
    id: "cert-15",
    name: "J.P. Morgan Software Engineering Simulation",
    issuer: "Forage",
    date: "Sep 2024"
  }
];
