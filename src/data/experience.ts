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
    role: "AI Engineer",
    company: "Nokia",
    duration: "Aug 2025 – Present",
    location: "Bengaluru, Karnataka (Hybrid)",
    points: [
      "Designed and implemented multi-agent AI systems with supervisor-worker architecture using LangGraph and AWS Bedrock",
      "Built knowledge graph–driven architectures for semantic reasoning, anomaly analysis, and memory-aware agents",
      "Developed telemetry-driven anomaly detection pipelines using Z-score, IQR, and Random Forest with confidence scoring",
      "Created AI-powered audit automation systems generating deterministic executive summaries",
      "Designed RAG pipelines and explored next-gen retrieval architectures (vectorless RAG)",
      "Built scalable AI assistant architectures integrating APIs, knowledge bases, and context-aware workflows",
      "Authored deep-tech newsletters on vectorless retrieval and structured agent memory systems",
      "Delivered multiple technical demos for Core User Group events showcasing AI agents and graph-driven architectures"
    ],
    techTags: ["Python", "LangChain", "LangGraph", "CrewAI", "Neo4j", "GraphDB", "Kubernetes", "Helm", "Docker", "Prometheus", "TimescaleDB", "OpenSearch", "AWS Bedrock"],
    iconBg: "bg-blue-600"
  },
  {
    id: "exp-2",
    role: "Intern",
    company: "Nokia",
    duration: "Sep 2024 – Aug 2025",
    location: "India",
    points: [
      "Evaluated AI agent frameworks (LangChain, CrewAI, AutoGen) and built comparison matrices",
      "Worked on Microsoft Azure cloud services and Kubernetes deployments",
      "Contributed to documentation automation pipelines using APIs and fallback scraping"
    ],
    techTags: ["Python", "Azure", "Kubernetes", "Docker"],
    iconBg: "bg-blue-500"
  },
  {
    id: "exp-3",
    role: "Intern",
    company: "Bharat Electronics Limited (BEL)",
    duration: "Summer Internship",
    points: [
      "Built a speech-to-text threat detection system using OpenAI Whisper AI model",
      "Designed an AI pipeline that converts audio to text and detects security threats using NLP",
      "Worked with real-time audio processing and threat classification algorithms"
    ],
    techTags: ["Python", "Whisper AI", "NLP", "Speech Processing"],
    iconBg: "bg-orange-600"
  }
];
