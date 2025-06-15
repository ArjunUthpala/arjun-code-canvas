
import React, { useState } from "react";
const experiences = [
  {
    title: "Software Engineer — Parallax Technologies",
    period: "Jan 2024 - Present",
    bullets: [
      "Led two dev teams",
      "Managed production releases @ Curfox",
      "Automated agile processes with AI",
    ],
  },
  {
    title: "Associate Software Engineer — Parallax Technologies",
    period: "Feb 2023 - Jan 2024",
    bullets: [
      "Worked on various projects involving Laravel and Vue.js.",
      "Assisted in the development of mobile applications using Flutter.",
      "Staging Environment Management",
      "Technical researching, code reviewing, hiring processes",
    ],
  },
  {
    title: "Software Engineer Intern — Parallax Technologies",
    period: "Aug 2022 - Feb 2023",
    bullets: [
      "API-based Backend + Mobile App Development/Debugging",
      "Requirement Brainstorming, Technical Planning, Agile practices",
    ],
  },
];

const ExperienceTimeline = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section id="experience" className="my-8 md:my-12 w-full max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-3 flex items-center justify-center gap-2 text-center">// Experience</h2>
      <div className="flex flex-col">
        {experiences.map((exp, idx) => (
          <div key={exp.title}
            className={`group bg-terminal rounded-lg border border-[#222] mb-4 shadow-lg overflow-hidden transition-all duration-300`}
          >
            <button
              onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
              className="w-full px-6 py-4 text-left hover:bg-[#1f232a] flex justify-between items-center ">
              <div>
                <div className="font-mono text-accent text-base font-bold">{exp.title}</div>
                <div className="text-secondary font-mono text-sm">{exp.period}</div>
              </div>
              <span className="ml-2 text-accent text-xl">{openIdx === idx ? "-" : "+"}</span>
            </button>
            <div
              style={{
                maxHeight: openIdx === idx ? `${exp.bullets.length * 2.4 + 1.1}rem` : "0",
                transition: "max-height 0.4s cubic-bezier(.5,0,.5,1)"
              }}
              className={`pl-8 pr-8 overflow-hidden bg-[#161b20]`}
            >
              <ul className={`py-2 ${openIdx === idx ? "animate-fade-in" : ""}`}>
                {openIdx === idx &&
                  exp.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="font-mono text-[1rem] text-foreground mb-2 flex items-start">
                      <span className="mr-3 text-accent">-</span>
                      {bullet}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
