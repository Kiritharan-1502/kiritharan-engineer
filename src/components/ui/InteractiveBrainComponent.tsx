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
  nodes.push({ id: "Shakthi Nandini", group: 0, val: 40, color: "#f8fafc", desc: "Exploring Generative AI & Cloud" });

  skillCategories.forEach((category, i) => {
    const catId = category.name;
    // Add category node
    nodes.push({ id: catId, group: i + 1, val: 20, color: "#ec4899", desc: "Domain" });
    // Link to center
    links.push({ source: "Shakthi Nandini", target: catId });

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
  // Programming
  "C": "A foundational programming language used for understanding programming concepts, logic, and system-level development.",
  "C++": "A general-purpose programming language used for object-oriented programming, problem solving, and application development.",
  "Java": "A widely used programming language for building reliable and scalable applications.",
  "C#": "A programming language used for application development, including Windows-based applications and .NET development.",
  "Python": "A versatile programming language used for automation, scripting, data handling, and exploring modern technologies.",
  "JavaScript": "A programming language used to create interactive and dynamic web applications.",
  "Data Structures": "Fundamental methods for organizing and efficiently managing data in software applications.",
  "OOP": "Object-Oriented Programming, a programming approach based on objects, classes, inheritance, and encapsulation.",

  // Web Technologies
  "HTML": "The standard markup language used to structure content and elements on web pages.",
  "CSS": "A styling language used to control the presentation, layout, and appearance of web pages.",
  "React": "A JavaScript library for building reusable and interactive user interfaces.",
  "Next.js": "A React framework for building modern web applications with features such as routing and server-side capabilities.",
  "Tailwind CSS": "A utility-first CSS framework for creating responsive and customizable user interfaces.",
  "Bootstrap": "A front-end framework used to build responsive and mobile-friendly web interfaces.",

  // Databases
  "MySQL": "A relational database management system used to store, organize, and retrieve structured data.",
  "SQL": "A language used to query, manage, and work with data stored in relational databases.",
  "Query Optimization": "The process of improving database queries so that they execute efficiently and use resources effectively.",

  // Testing
  "Selenium WebDriver": "A browser automation tool used to automate web applications and perform functional testing.",
  "TestNG": "A testing framework for Java that supports test organization, execution, and reporting.",
  "Manual Testing": "The process of manually checking software functionality to identify defects and verify expected behavior.",

  // Cloud & Emerging Technology
  "AWS": "A cloud computing platform providing a wide range of services for building, deploying, and managing applications.",
  "Generative AI": "An area of artificial intelligence focused on systems that can generate text, images, code, and other content.",
  "AI Tools": "Tools and technologies that use artificial intelligence to support productivity, automation, problem solving, and software development.",

  // Enterprise & Tools
  "ServiceNow": "An enterprise platform used to manage IT services, incidents, service requests, and business workflows.",
  "Intune": "Microsoft's cloud-based endpoint management solution for managing devices, applications, and organizational access.",
  "Active Directory": "A Microsoft directory service used to manage users, computers, permissions, and access within an organization.",
  "SCCM": "Microsoft System Center Operations Manager, a monitoring platform used to monitor the health and performance of IT environments.",
  "ITSM": "IT Service Management practices and processes used to manage and deliver effective IT services.",
  "VS Code": "A source-code editor used for writing, editing, debugging, and managing software projects.",
  "Git": "A distributed version control system used to track changes in source code and collaborate on software projects.",
  "GitHub": "A platform for hosting, managing, and collaborating on software projects using Git.",
  "Perceive": "A ticketing system used for logging, tracking, and updating IT incidents and service requests.",
  "Okta Administration": "Identity and access administration involving user accounts, authentication, and application access.",
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
                ? "Exploring Generative AI, cloud technologies, and practical solutions while continuously learning and building new skills."
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
