
import React from "react";

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
  Frameworks: [
    "Laravel",
    "Vue.js",
    "Flutter"
  ],
  AI: [
    "ChatGPT",
    "Github Copilot",
    "Google Gemini",
    "Loveable"
  ],
  "Cloud Services": [
    "Azure",
    "Huawei"
  ],
  Tools: [
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
  Database: [
    "MySQL",
    "MSSQL",
    "Firestore"
  ]
};

const prettyJson = JSON.stringify(skills, null, 2);

const SkillsSection = () => {
  return (
    <section id="skills" className="my-12 md:my-20 w-full max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-3 flex items-center justify-center gap-2 text-center">
        <span>{'{ Skills }'}</span>
      </h2>
      <div className="bg-terminal border border-[#222] rounded-lg shadow-lg p-6 md:p-8">
        <pre className="text-[14px] md:text-[15px] font-mono text-secondary bg-[#16191c] rounded-md p-4 whitespace-pre overflow-x-auto">
{prettyJson}
        </pre>
      </div>
    </section>
  );
};

export default SkillsSection;
