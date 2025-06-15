
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

function renderJsonArray(arr: string[], indent: number, arrayColor: string) {
  const pad = { paddingLeft: `${indent * 32}px` };
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2" style={pad}>
      <span className={bracketColor.square}>[</span>
      {arr.map((v, i) => (
        <span key={i} className="flex items-center">
          <span className={bracketColor.quote}>"</span>
          <span className={`${arrayColor} font-semibold`}>{v}</span>
          <span className={bracketColor.quote}>"</span>
          {i < arr.length - 1 && <span className={bracketColor.comma}>,</span>}
        </span>
      ))}
      <span className={bracketColor.square}>]</span>
    </div>
  );
}

function renderTile(key: string, arr: string[]) {
  return (
    <div
      key={key}
      className="bg-terminal rounded-lg border border-[#222] shadow-lg px-5 py-6 mb-4 min-w-[210px] max-w-[380px] w-full animate-fade-in transition hover:scale-[1.025]"
      style={{
        minHeight: '194px',
        margin: "8px"
      }}
    >
      <pre className="font-mono text-[14px] md:text-[15px] text-secondary overflow-x-auto whitespace-pre-wrap break-words">
        <span className={bracketColor.curly}>{"{"}</span>
        {"\n"}
        <span style={{ paddingLeft: "32px" }}>
          <span className={bracketColor.quote}>"</span>
          <span className={`${skillColor[key] || "text-accent"} font-bold`}>{key}</span>
          <span className={bracketColor.quote}>"</span>
          <span className={bracketColor.colon}>: </span>
          {renderJsonArray(arr, 1, skillColor[key] || "text-accent")}
        </span>
        {"\n"}
        <span className={bracketColor.curly}>{"}"}</span>
      </pre>
    </div>
  );
}

const SkillsSection = () => {
  return (
    <section id="skills" className="my-7 md:my-9 w-full max-w-6xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-2 flex items-center justify-center gap-2 text-center">
        <span>// Skills</span>
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {Object.entries(skills).map(([key, arr]) =>
            renderTile(key, arr)
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
