
import React, { useRef, useState } from "react";
import { Copy } from "lucide-react";

const skillset = {
  languages: ["PHP", "JavaScript", "Dart", "C#", "SQL"],
  frameworks: ["Laravel", "Vue.js", "Flutter"],
  tools: ["GitHub", "Postman", "Jenkins", "Figma", "Termius"],
  databases: ["MySQL", "MSSQL", "Firestore"],
  cloud: ["Azure", "Huawei"],
};

const jsonCode = JSON.stringify(skillset, null, 2);

const SkillsSection = () => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section id="skills" className="my-12 md:my-20 w-full max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-3 flex items-center gap-2">
        <span>{"{ Skills }"}</span>
      </h2>
      <div className="relative">
        <pre ref={codeRef} className="bg-terminal font-mono text-accent text-base md:text-lg rounded-lg border border-[#222] p-6 pl-10 shadow-lg overflow-x-auto select-text">{jsonCode}</pre>
        <button
          aria-label="Copy skills json"
          onClick={handleCopy}
          className="absolute top-4 right-4 bg-[#222]/80 hover:bg-accent text-sm text-accent hover:text-[#222] font-mono p-2 rounded transition flex items-center gap-1"
        >
          <Copy size={16} />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
