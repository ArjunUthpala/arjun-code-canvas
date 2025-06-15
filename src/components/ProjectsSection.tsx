
import React from "react";

const projectList = [
  {
    name: "Curfox",
    role: "Product Owner & Engineer",
    period: "Aug 2022 – Present",
    description: "AI-powered Cloud Courier Management Software handling millions of data points. Responsible for overall functionality, product execution, and optimization.",
    stack: ["Huawei Cloud", "Azure", "Laravel", "Vue.js", "Flutter"],
    link: "https://curfox.com/",
  },
  {
    name: "TipApp the Tipping App",
    role: "Core Developer",
    period: "Aug 2024 – Oct 2024",
    description: "Led dev team for web portals & mobile apps. Supported PM & reporting for a foreign client.",
    stack: ["Nest.js", "React", "Flutter"],
    link: "https://tipapp.example.com",
  },
  {
    name: "TransExpress Legacy Courier System",
    role: "Performance Optimizer",
    period: "Jan 2023 – Mar 2023",
    description: "Optimized legacy Laravel + MySQL system, focused on performance improvement.",
    stack: ["Laravel", "MySQL"],
    link: "",
  },
  {
    name: "Ride Care",
    role: "Fullstack Developer",
    period: "Oct 2021 – May 2022",
    description: "Vehicle Repair Management App – cross-platform scheduling, notifications, and appointment management.",
    stack: ["Flutter", "Dart", "Firebase"],
    link: "",
  },
  {
    name: "NLP-based AI Chatbot",
    role: "Lead Developer",
    period: "—",
    description: "AI Chatbot generating leads for logistics management.",
    stack: ["Java"],
    link: "",
  },
  {
    name: "Hotel Management Support System",
    role: "Solo Dev",
    period: "—",
    description: "Full management system with analytics and database.",
    stack: ["MySQL", "PHP", "Bootstrap", "Google Chart API"],
    link: "",
  },
  {
    name: "Taxi Management System",
    role: "Solo Dev",
    period: "—",
    description: "Multi-role portal for Taxi company (Passenger/Driver/Admin).",
    stack: ["MySQL", "PHP", "Bootstrap", "Google Maps API", "JavaScript"],
    link: "",
  },
  {
    name: "Car Inventory and Order Handling System",
    role: "Solo Dev",
    period: "—",
    description: "Windows Application for car inventory/order management.",
    stack: ["MS SQL", "C#", "Windows Forms", "Linq"],
    link: "",
  },
  {
    name: "Online Book Store Sales Handling System",
    role: "Solo Dev",
    period: "—",
    description: "MVC web app with full database & AJAX features.",
    stack: ["MS SQL", "C# ASP.net Core 6.0", "Bootstrap", "AJAX", "Jquery", "Linq"],
    link: "",
  },
  {
    name: "Online Library Management System",
    role: "Solo Dev",
    period: "—",
    description: "Full-featured Library Management System web app.",
    stack: ["MySQL", "PHP", "Bootstrap", "JavaScript"],
    link: "",
  },
  ];

const ProjectsSection = () => (
  <section id="projects" className="my-12 md:my-20 w-full max-w-5xl mx-auto">
    <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-3 flex items-center gap-2">
      <span>{"// Projects"}</span>
    </h2>
    <div className="grid md:grid-cols-2 gap-7">
      {projectList.map((proj, i) => (
        <div
          key={proj.name}
          className="group bg-terminal rounded-lg border border-[#222] hover:border-accent shadow-lg p-6 pb-5 flex flex-col gap-4 cursor-pointer transition duration-200 hover:shadow-2xl"
        >
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-accent text-lg font-bold">{proj.name}</span>
            <span className="font-mono text-secondary text-xs px-2 border border-[#222] rounded mr-2">{proj.role}</span>
            <span className="font-mono text-xs text-secondary">{proj.period}</span>
          </div>
          <div className="font-mono text-[1rem] text-foreground">{proj.description}</div>
          <div className="flex flex-wrap gap-2">
            {proj.stack.map((tag, idx) => (
              <span
                key={tag + idx}
                className="font-mono px-2 py-0.5 text-xs bg-[#191f24] border border-[#262626] rounded text-accent hover:bg-accent hover:text-[#181818] transition"
              >
                {tag}
              </span>
            ))}
          </div>
          {proj.link && (
            <div>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline text-xs hover:brightness-110 font-mono"
              >
                Live Project ↗
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
