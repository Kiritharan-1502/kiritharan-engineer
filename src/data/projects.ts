export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  highlights?: string[];
  size: "large" | "medium" | "small";
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Multi-Agent AI System",
    description: "A production-grade multi-agent system using LangGraph with supervisor-worker architecture. Features intelligent task routing, AWS Bedrock integration, Athena API for domain knowledge, real-time checklist management, and a Gradio web interface.",
    tech: ["LangGraph", "LangChain", "AWS Bedrock", "Python", "Gradio"],
    highlights: ["Supervisor agent routing", "CIQ + CuDo specialized agents", "Summarizer agent"],
    size: "large"
  },
  {
    id: "proj-2",
    title: "Knowledge Graph-Driven AIOps Platform",
    description: "End-to-end AIOps system combining knowledge graphs with telemetry data. Transforms cluster data into RDF for graph-based reasoning. Includes anomaly detection (Z-score, IQR, Random Forest), confidence scoring, and root cause analysis.",
    tech: ["GraphDB", "Neo4j", "RDF/OWL", "Prometheus", "TimescaleDB", "Python", "Kubernetes"],
    size: "medium"
  },
  {
    id: "proj-3",
    title: "AI-Powered Audit Automation System",
    description: "Deterministic AI system that extracts structured audit insights, produces executive summaries, classifies weaknesses, and prioritizes risks — all from uploaded audit documents.",
    tech: ["Python", "LLM", "Prompt Engineering", "Copilot Studio"],
    size: "medium"
  },
  {
    id: "proj-4",
    title: "Whisper AI Threat Detection System",
    description: "Built at BEL — converts speech to text using OpenAI Whisper and detects security threats using NLP classification. Real-time audio processing pipeline for defense applications.",
    tech: ["Python", "OpenAI Whisper", "NLP", "Speech-to-Text"],
    size: "medium"
  },
  {
    id: "proj-5",
    title: "Website Vulnerability Scanner — Chrome Extension",
    description: "Final year project — a Chrome extension that scans websites for common vulnerabilities (XSS, SQL injection, insecure headers, etc.) and provides a security report with remediation suggestions.",
    tech: ["JavaScript", "Chrome Extension API", "Security Analysis", "HTML/CSS"],
    size: "medium"
  },
  {
    id: "proj-6",
    title: "RAG Pipeline with Vector Databases",
    description: "Designed and implemented RAG pipelines with vector retrieval, graph embeddings, and hybrid search for enterprise knowledge bases.",
    tech: ["LangChain", "Vector DB", "RAG", "Python"],
    size: "small"
  }
];
