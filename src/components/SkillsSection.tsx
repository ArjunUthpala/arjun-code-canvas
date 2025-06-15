import React from "react";
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
  // Separate Hard Skills, keep the others' order
  const skillEntries = Object.entries(skills);
  const otherSkills = skillEntries.filter(([group]) => group !== "Hard Skills");
  const hardSkills = skillEntries.find(([group]) => group === "Hard Skills");

  return (
    <section id="skills" className="my-7 md:my-12 w-full max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-4 flex items-center justify-center gap-2 text-center">
        <span>// Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        {otherSkills.map(([group, arr]) => (
          <SkillRow key={group} group={group} skills={arr} />
        ))}
      </div>
      {hardSkills && (
        <div className="mt-2">
          <SkillRow group={hardSkills[0]} skills={hardSkills[1]} />
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
