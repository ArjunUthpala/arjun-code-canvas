
import React from "react";
import { BadgeCheck } from "lucide-react";

const skills = [
  {
    label: "Soft Skills",
    items: [
      "Effective Communication",
      "Problem Solving",
      "Critical Thinking",
      "Team Work",
      "Leadership",
      "Self Motivation",
      "Responsible Ownership"
    ]
  },
  {
    label: "Hard Skills",
    items: [
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
    ]
  },
  {
    label: "Frameworks",
    items: [
      "Laravel",
      "Vue.js",
      "Flutter"
    ]
  },
  {
    label: "AI",
    items: [
      "ChatGPT",
      "Github Copilot",
      "Google Gemini",
      "Loveable"
    ]
  },
  {
    label: "Cloud Services",
    items: [
      "Azure",
      "Huawei"
    ]
  },
  {
    label: "Tools",
    items: [
      "Github",
      "Github Actions",
      "Termius",
      "Jenkins",
      "Postman",
      "dbForge",
      "DBeaver",
      "Figma",
      "Canva"
    ]
  },
  {
    label: "Database",
    items: [
      "MySQL",
      "MSSQL",
      "Firestore"
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="my-12 md:my-20 w-full max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-3 flex items-center gap-2">
        <span>{"{ Skills }"}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-terminal border border-[#222] rounded-lg shadow-lg p-6 md:p-8">
        {skills.map(({ label, items }) => (
          <div key={label}>
            <h3 className="font-semibold text-accent mb-2 text-md font-mono">
              <span className="inline-flex items-center gap-1">
                <BadgeCheck className="inline w-5 h-5 text-accent mr-1" />
                {label}
              </span>
            </h3>
            <ul className="ml-2 mb-2 list-disc text-secondary text-[15px] font-mono space-y-1">
              {items.map((skill) => (
                <li key={skill} className="pl-1">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
