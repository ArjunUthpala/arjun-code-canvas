
import React from "react";

// Vibrant custom color scale for each level
const skillColor: Record<string, string> = {
  "Soft Skills": "text-[#00ffd0]",
  "Hard Skills": "text-[#ff12af]",
  "Frameworks": "text-[#ffe820]",
  "AI": "text-[#3cff44]",
  "Cloud Services": "text-[#b289fa]",
  "Tools": "text-[#ff9100]",
  "Database": "text-[#fe47b7]",
  // fallback
  "_array": "text-[#05d4f9]"
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

// Recursive renderer with improved indentation/color for each nesting
function renderColorJson(obj: any, indent = 0, parentKey = "") {
  const indentPx = 16 * indent;
  if (Array.isArray(obj)) {
    return (
      <span className={`flex flex-wrap gap-x-2 break-words pl-[${indentPx}px]`}>
        {obj.map((v, i) => (
          <span key={i} className={skillColor["_array"] + " font-semibold"}>
            <span className="text-white">"</span>
            <span>{v}</span>
            <span className="text-white">"{i < obj.length - 1 ? "," : ""}</span>
          </span>
        ))}
      </span>
    );
  } else if (typeof obj === "object" && obj) {
    const entries = Object.entries(obj);
    return (
      <div>
        <span>{"{"}</span>
        <div>
          {entries.map(([key, val], idx) => (
            <div
              key={key}
              className="flex flex-wrap items-start"
              style={{
                paddingLeft: `${(indent + 1) * 16}px`
              }}
            >
              <span className="text-white">"</span>
              <span className={skillColor[key] + " font-bold"}>{key}</span>
              <span className="text-white">"</span>
              <span className="text-secondary">: </span>
              {Array.isArray(val) ? (
                <span className="">
                  [
                  <span className="ml-1">{renderColorJson(val, indent + 2, key)}</span>
                  ]
                </span>
              ) : (
                renderColorJson(val, indent + 1, key)
              )}
              {idx < entries.length - 1 && <span className="text-secondary">,</span>}
            </div>
          ))}
        </div>
        <span>{"}".padStart((indent + 1) * 2 + 1, " ")}</span>
      </div>
    );
  }
  return (
    <span className="text-white">{JSON.stringify(obj)}</span>
  );
}

const SkillsSection = () => {
  return (
    <section id="skills" className="my-7 md:my-9 w-full max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-2 flex items-center justify-center gap-2 text-center">
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

