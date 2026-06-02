"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import ForceGraph3D from "react-force-graph-3d";
import { GlassCard } from "./GlassCard";
import { X } from "lucide-react";
import { skillCategories } from "@/data/skills";
import * as THREE from "three";
import SpriteText from "three-spritetext";

// Graph Data Construction
const generateGraphData = () => {
  const nodes: any[] = [];
  const links: any[] = [];

  // Center node
  nodes.push({ id: "Janavi J", group: 0, val: 40, color: "#f8fafc", desc: "AI Engineer @ Nokia" });

  skillCategories.forEach((category, i) => {
    const catId = category.name;
    // Add category node
    nodes.push({ id: catId, group: i + 1, val: 20, color: "#ec4899", desc: "Domain" });
    // Link to center
    links.push({ source: "Janavi J", target: catId });

    // Add skill nodes
    category.skills.forEach((skill) => {
      // Vary color slightly based on group
      const colors = ["#22d3ee", "#a855f7", "#c084fc", "#7c3aed", "#ec4899", "#f472b6"];
      const color = colors[i % colors.length];
      
      nodes.push({ id: skill, group: i + 1, val: 10, color: color, desc: "Skill" });
      links.push({ source: catId, target: skill });
    });
  });

  return { nodes, links };
};

// Standard definitions for skills
const skillDefinitions: Record<string, string> = {
  // AI & ML
  "Python": "A high-level, general-purpose programming language widely used in AI, data science, and backend development.",
  "Machine Learning": "A field of AI focused on developing algorithms that allow computers to learn from and make predictions based on data.",
  "Deep Learning": "A subset of machine learning based on artificial neural networks with multiple layers.",
  "NLP": "Natural Language Processing: the ability of a computer program to understand human language as it is spoken and written.",
  "Scikit-Learn": "A popular open-source machine learning library for Python featuring various classification, regression and clustering algorithms.",
  "NumPy": "A library for the Python programming language, adding support for large, multi-dimensional arrays and matrices.",
  "Matplotlib": "A plotting library for the Python programming language and its numerical mathematics extension NumPy.",
  "Anomaly Detection": "The identification of rare items, events or observations which raise suspicions by differing significantly from the majority of the data.",
  "LLMs": "Large Language Models: advanced AI models trained on vast amounts of text data to understand and generate human-like language.",
  "Prompt Engineering": "The practice of designing and refining inputs (prompts) to guide AI models to produce optimal outputs.",
  "RAG": "Retrieval-Augmented Generation: an AI framework that retrieves factual information from an external knowledge base to ground large language models.",
  "Vector Databases": "Databases designed to store and query high-dimensional vectors efficiently, crucial for semantic search and RAG.",
  "Graph Embeddings": "The process of transforming nodes, edges, and their features into vector space while preserving graph structure.",

  // Agents
  "LangChain": "A framework designed to simplify the creation of applications using large language models.",
  "LangGraph": "An extension of LangChain for building stateful, multi-actor applications with LLMs using graph concepts.",
  "CrewAI": "A framework for orchestrating role-playing, autonomous AI agents to work together on complex tasks.",
  "AutoGen": "A framework that enables development of LLM applications using multiple agents that can converse with each other.",
  "Agentic Workflows": "Automated processes where autonomous AI agents make decisions, use tools, and collaborate to achieve goals.",
  "Multi-Agent Systems": "Computerized systems composed of multiple interacting intelligent agents.",
  "ReAct Pattern": "Reasoning and Acting: a paradigm where LLMs generate reasoning traces and task-specific actions in an interleaved manner.",
  "Tool-Using Agents": "AI agents equipped with the ability to call external APIs, execute code, or query databases to accomplish tasks.",
  "Agent Memory": "Systems allowing agents to retain context over time, including episodic (past events), semantic (facts), and procedural (skills) memory.",
  "Model Context Protocol (MCP)": "An open standard that enables AI models to securely connect to and interact with local and remote data sources.",

  // KG
  "Neo4j": "A highly scalable native graph database that leverages data relationships as first-class entities.",
  "GraphDB/Ontotext": "An enterprise semantic graph database engine for storing, managing, and querying RDF data.",
  "RDF": "Resource Description Framework: a standard model for data interchange on the Web, forming the basis of semantic graphs.",
  "OWL": "Web Ontology Language: a semantic web language designed to represent rich and complex knowledge about things and their relations.",
  "SPARQL": "An RDF query language able to retrieve and manipulate data stored in Resource Description Framework (RDF) format.",
  "Ontology Engineering": "The field studying the methods and methodologies for building ontologies (formal representations of knowledge).",
  "Semantic Reasoning": "The process of inferring logical consequences from a set of asserted facts or axioms in a knowledge base.",

  // Cloud & DevOps
  "Kubernetes": "An open-source system for automating deployment, scaling, and management of containerized applications.",
  "Helm": "A package manager for Kubernetes that simplifies deployment of complex applications.",
  "Docker": "A platform that enables developers to build, test, and deploy applications quickly using containers.",
  "OpenShift": "An enterprise-ready Kubernetes container platform by Red Hat with full-stack automated operations.",
  "Microsoft Azure": "A cloud computing platform operated by Microsoft providing access, management, and development of applications and services.",
  "AWS Bedrock": "A fully managed service that offers a choice of high-performing foundation models via a single API.",
  "Prometheus": "An open-source systems monitoring and alerting toolkit originally built at SoundCloud.",
  "TimescaleDB": "An open-source relational database for time-series data, built as a PostgreSQL extension.",
  "OpenSearch": "A scalable, flexible, and extensible open-source software suite for search, analytics, and observability applications.",
  "CI/CD": "Continuous Integration and Continuous Deployment: practices enabling frequent and reliable software delivery.",

  // Programming
  "JavaScript": "A high-level, often just-in-time compiled programming language that conforms to the ECMAScript specification.",
  "SQL": "Structured Query Language: a domain-specific language used in programming and designed for managing data in relational databases.",
  "Data Structures": "Specialized formats for organizing, processing, retrieving and storing data.",
  "DBMS": "Database Management System: software that interacts with end users, applications, and the database itself to capture and analyze the data.",
  "Operating Systems": "System software that manages computer hardware, software resources, and provides common services for computer programs.",
  "Computer Networking": "The interconnection of multiple devices, generally termed as Hosts connected using multiple paths for the purpose of sending/receiving data.",

  // Other
  "Process Mining": "A family of techniques relating the fields of data science and process management to support the analysis of operational processes.",
  "Product Descriptions": "The marketing copy used to describe a product's value proposition to potential customers.",
  "Delegation": "The assignment of authority or responsibility to another person (or AI agent) to carry out specific activities.",
  "AI Evaluation": "The systematic process of assessing the performance, safety, and reliability of artificial intelligence systems.",
  "Sustainable AI": "The practice of designing, developing, and deploying AI systems in a way that minimizes environmental impact.",
  "Technical Writing": "Writing or drafting technical communication used in technical and occupational fields.",
  "Git": "A distributed version control system that tracks changes in any set of computer files.",
  "VS Code": "Visual Studio Code: a source-code editor made by Microsoft with support for debugging, syntax highlighting, and version control.",
  "Linux": "A family of open-source Unix-like operating systems based on the Linux kernel.",
};

const InteractiveBrainComponent = () => {
  const [data, setData] = useState({ nodes: [], links: [] });
  const [selectedNode, setSelectedNode] = useState<any | null>(null);
  const fgRef = useRef<any>(null);

  useEffect(() => {
    // Delay setting the data to ensure the 3D context is fully mounted
    const timer = setTimeout(() => {
      setData(generateGraphData() as any);
      
      // Auto-rotate the graph slightly on load
      if (fgRef.current) {
        fgRef.current.d3Force("charge").strength(-120); // Spread nodes out more
        fgRef.current.cameraPosition({ x: 0, y: 0, z: 400 });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNodeClick = useCallback(
    (node: any) => {
      setSelectedNode(node);
      // Aim at node from outside it
      const distance = 80;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      if (fgRef.current) {
        fgRef.current.cameraPosition(
          { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
          node, // lookAt ({ x, y, z })
          2000  // ms transition duration
        );
      }
    },
    [fgRef]
  );

  return (
    <div className="relative w-full h-[600px] lg:h-[800px] rounded-3xl overflow-hidden glass border border-[#a855f7]/30 shadow-[0_0_50px_rgba(124,58,237,0.15)] bg-[#050508]">
      
      {/* Galaxy Background Glow */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7c3aed]/20 via-[#0a0a0f] to-[#0a0a0f]"></div>

      <div className="absolute inset-0 z-10 cursor-move">
        <ForceGraph3D
          ref={fgRef}
          graphData={data}
          nodeLabel="id"
          nodeRelSize={6}
          linkColor={() => "rgba(168, 85, 247, 0.4)"}
          linkWidth={1.5}
          linkDirectionalParticles={2}
          linkDirectionalParticleWidth={1.5}
          linkDirectionalParticleSpeed={0.005}
          backgroundColor="rgba(0,0,0,0)"
          onNodeClick={handleNodeClick}
          enableNodeDrag={false}
          showNavInfo={false}
          nodeThreeObject={(node: any) => {
            // Create a custom 3D object for each node
            const group = new THREE.Group();
            
            // Sphere for the node
            const geometry = new THREE.SphereGeometry(Math.sqrt(node.val) * 1.5);
            const material = new THREE.MeshPhongMaterial({ 
              color: node.color,
              transparent: true,
              opacity: 0.8,
              emissive: node.color,
              emissiveIntensity: 0.5
            });
            const sphere = new THREE.Mesh(geometry, material);
            group.add(sphere);

            // Add text label for prominent nodes
            if (node.val >= 20) {
              const sprite = new SpriteText(node.id);
              sprite.color = '#ffffff';
              sprite.textHeight = node.val === 40 ? 8 : 4;
              sprite.position.y = Math.sqrt(node.val) * 1.5 + (node.val === 40 ? 6 : 4);
              group.add(sprite);
            }

            return group;
          }}
        />
      </div>

      {/* Interactive Overlay Overlay */}
      <div className="absolute top-6 left-6 z-20 pointer-events-none">
        <h3 className="text-2xl font-bold font-mono text-white mb-2 tracking-tight drop-shadow-md">Knowledge Galaxy</h3>
        <p className="text-[#94a3b8] text-sm bg-[#0a0a0f]/50 px-3 py-1 rounded-full backdrop-blur-md inline-block border border-[#a855f7]/20">
          Drag to rotate • Scroll to zoom • Click nodes
        </p>
      </div>

      {/* Selected Node Panel */}
      {selectedNode && (
        <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:top-6 lg:right-6 lg:w-80 lg:bottom-auto z-30 animate-in fade-in slide-in-from-bottom-4 lg:slide-in-from-right-4 duration-300">
          <GlassCard className="p-6 relative border-[#c084fc]/40 shadow-[0_0_30px_rgba(168,85,247,0.2)] bg-[#0f0f19]/90">
            <button 
              onClick={() => setSelectedNode(null)}
              className="absolute top-4 right-4 text-[#94a3b8] hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3 mb-3 pr-6">
              <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: selectedNode.color, boxShadow: `0 0 10px ${selectedNode.color}` }}></div>
              <h4 className="text-xl font-bold text-white leading-tight">{selectedNode.id}</h4>
            </div>
            <p className="text-[#c084fc] text-xs uppercase tracking-wider font-bold mb-4">{selectedNode.desc}</p>
            <p className="text-[#cbd5e1] text-sm leading-relaxed">
              {selectedNode.val === 40 
                ? "The central hub of my expertise. Exploring the intersection of AI, Agentic systems, and Knowledge Graphs."
                : selectedNode.val === 20
                ? `A core domain of my technical stack. This category encompasses my relevant skills and tools in ${selectedNode.id}.`
                : skillDefinitions[selectedNode.id] || `A specialized skill I use within my ${skillCategories.find(c => c.skills.includes(selectedNode.id))?.name} workflow to build robust AI systems.`
              }
            </p>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

export default InteractiveBrainComponent;
