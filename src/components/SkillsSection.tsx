
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

// Color mapping for each group
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
    return (
      <>
        {"["}
        {obj.map((v, i) => (
          <div key={i}>
            {indentStr + "  "}
            <span>{`"`}</span>
            <span className="text-secondary">{v}</span>
            <span>{`"`}</span>
            {i < obj.length - 1 ? <span>{","}</span> : null}
          </div>
        ))}
        {indentStr + "]"}
      </>
    );
  } else if (typeof obj === "object" && obj) {
    // color each array according to parent key
    return (
      <>
        {"{"}
        {Object.entries(obj).map(([key, val], idx, arr) => (
          <div key={key} className="relative">
            <span style={{ paddingLeft: `${indent * 2}ch` }}></span>
            <span className="text-accent">"</span>
            <span className="text-accent">{key}</span>
            <span className="text-accent">"</span>
            <span className="text-secondary">: </span>
            <span>
              {Array.isArray(val) ? (
                // Use color for this skill group
                <span className={skillColor[key] || "text-secondary"}>
                  [
                  {val.map((v, i) => (
                    <span key={v} className="whitespace-nowrap">
                      <span>"</span>
                      {v}
                      <span>"</span>
                      {i < val.length - 1 ? <span>, </span> : null}
                    </span>
                  ))}
                  ]
                </span>
              ) : (
                // If nested object, recurse
                renderColorJson(val, indent + 1)
              )}
            </span>
            {idx < arr.length - 1 ? <span className="text-secondary">,</span> : null}
          </div>
        ))}
        {"}"}
      </>
    );
  }
  // Fallback for primitives
  return <span>{JSON.stringify(obj)}</span>;
}

const SkillsSection = () => {
  return (
    <section id="skills" className="my-12 md:my-20 w-full max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-3 flex items-center justify-center gap-2 text-center">
        <span>{'{ Skills }'}</span>
      </h2>
      <div className="bg-terminal border border-[#222] rounded-lg shadow-lg p-6 md:p-8">
        <pre className="text-[14px] md:text-[15px] font-mono text-secondary bg-[#16191c] rounded-md p-4 whitespace-pre overflow-x-auto">
          {renderColorJson(skills)}
        </pre>
      </div>
    </section>
  );
};

export default SkillsSection;
