export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "Scikit-Learn", "NumPy", "Matplotlib", "Anomaly Detection", "LLMs", "Prompt Engineering", "RAG", "Vector Databases", "Graph Embeddings"]
  },
  {
    id: "agents",
    name: "Agent Frameworks & Agentic AI",
    skills: ["LangChain", "LangGraph", "CrewAI", "AutoGen", "Agentic Workflows", "Multi-Agent Systems", "ReAct Pattern", "Tool-Using Agents", "Agent Memory", "Model Context Protocol (MCP)"]
  },
  {
    id: "kg",
    name: "Knowledge Graphs & Ontology",
    skills: ["Neo4j", "GraphDB/Ontotext", "RDF", "OWL", "SPARQL", "Ontology Engineering", "Semantic Reasoning"]
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    skills: ["Kubernetes", "Helm", "Docker", "OpenShift", "Microsoft Azure", "AWS Bedrock", "Prometheus", "TimescaleDB", "OpenSearch", "CI/CD"]
  },
  {
    id: "programming",
    name: "Programming & Data",
    skills: ["Python", "JavaScript", "SQL", "SPARQL", "Data Structures", "DBMS", "Operating Systems", "Computer Networking"]
  },
  {
    id: "other",
    name: "Other Skills",
    skills: ["Process Mining", "Product Descriptions", "Delegation", "AI Evaluation", "Sustainable AI", "Technical Writing", "Git", "VS Code", "Linux"]
  }
];
