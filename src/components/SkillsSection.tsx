
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

const skillColor: Record<string, string> = {
  "Soft Skills": "text-sky-300",
  "Hard Skills": "text-rose-300",
  "Frameworks": "text-yellow-300",
  "AI": "text-green-300",
  "Cloud Services": "text-purple-300",
  "Tools": "text-orange-300",
  "Database": "text-fuchsia-300",
};

function renderColorJson(obj: any, indent = 0) {
  const indentStr = "  ".repeat(indent);
  if (Array.isArray(obj)) {
    // Render comma-separated and wrap content to fit, not horizontally scroll
    return (
      <span className="flex flex-wrap gap-x-2 break-words">
        {obj.map((v, i) => (
          <span key={i}>
            <span>"</span>
            <span className="text-secondary">{v}</span>
            <span>"{i < obj.length - 1 ? "," : ""}</span>
          </span>
        ))}
      </span>
    );
  } else if (typeof obj === "object" && obj) {
    return (
      <>
        {"{"}
        {Object.entries(obj).map(([key, val], idx, arr) => (
          <div key={key} className="relative flex flex-wrap">
            <span style={{ paddingLeft: `${indent * 2}ch` }}></span>
            <span className="text-accent">"</span>
            <span className="text-accent">{key}</span>
            <span className="text-accent">"</span>
            <span className="text-secondary">: </span>
            {Array.isArray(val) ? (
              <span className={skillColor[key] || "text-secondary"}>
                [{renderColorJson(val, indent + 1)}]
              </span>
            ) : (
              renderColorJson(val, indent + 1)
            )}
            {idx < arr.length - 1 ? <span className="text-secondary">,</span> : null}
          </div>
        ))}
        {"}"}
      </>
    );
  }
  return <span>{JSON.stringify(obj)}</span>;
}

const SkillsSection = () => {
  return (
    <section id="skills" className="my-8 md:my-12 w-full max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-3 flex items-center justify-center gap-2 text-center">
        <span>// Skills</span>
      </h2>
      <div className="bg-terminal border border-[#222] rounded-lg shadow-lg p-6 md:p-8">
        <pre className="text-[14px] md:text-[15px] font-mono text-secondary bg-[#16191c] rounded-md p-4 whitespace-pre-wrap break-words overflow-x-auto max-w-full min-w-0">
          {renderColorJson(skills)}
        </pre>
      </div>
    </section>
  );
};

export default SkillsSection;
