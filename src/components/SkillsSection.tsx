import React from "react";

// Vibrant color for brackets/paratheses
const bracketColor = {
  curly: "text-[#47eaff]",
  square: "text-[#feec56]",
  colon: "text-[#fe47b7]",
  comma: "text-[#58ffe2]",
  quote: "text-[#e1ecff]",
};

const skillColor: Record<string, string> = {
  "Soft Skills": "text-[#00ffd0]",
  "Hard Skills": "text-[#ff12af]",
  "Frameworks": "text-[#ffe820]",
  "AI": "text-[#3cff44]",
  "Cloud Services": "text-[#b289fa]",
  "Tools": "text-[#ff9100]",
  "Database": "text-[#fe47b7]",
  // fallback
  "_array": "text-[#05d4f9]",
};

import SkillRow from "./SkillRow";

const skills = {
  "Soft Skills": [
    "Effective Communication",
    "Problem Solving",
    "Critical Thinking",
    "Team Work",
    "Leadership",
    "Self Motivation",
    "Responsible Ownership"
  ],
  "Hard Skills": [
    "Full Stack Development",
    "Technical Planning",
    "Code Review",
    "Intern Training",
    "Prompt Engineering",
    "Technical Interviewing",
    "SQL Reporting & Database Management",
    "Version Control",
    "RESTful APIs Development",
    "Staging Management",
    "Production Releases",
    "CI/CD Pipelines",
    "Server Monitoring"
  ],
  "Frameworks": [
    "Laravel",
    "Vue.js",
    "Flutter"
  ],
  "AI": [
    "ChatGPT",
    "Github Copilot",
    "Google Gemini",
    "Loveable"
  ],
  "Cloud Services": [
    "Azure",
    "Huawei"
  ],
  "Tools": [
    "Github",
    "Github Actions",
    "Termius",
    "Jenkins",
    "Postman",
    "dbForge",
    "DBeaver",
    "Figma",
    "Canva"
  ],
  "Database": [
    "MySQL",
    "MSSQL",
    "Firestore"
  ]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="my-7 md:my-12 w-full max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-4 flex items-center justify-center gap-2 text-center">
        <span>// Skills</span>
      </h2>
      <div className="w-full flex flex-col gap-0">
        {Object.entries(skills).map(([group, arr]) => (
          <SkillRow key={group} group={group} skills={arr} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
