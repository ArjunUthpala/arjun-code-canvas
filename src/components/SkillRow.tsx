
import React from "react";
import SkillIcon from "./SkillIcon";

interface SkillRowProps {
  group: string;
  skills: string[];
}

const SkillRow: React.FC<SkillRowProps> = ({ group, skills }) => {
  const groupColor = "text-yellow-400";
  const chipBase =
    "font-mono px-2 py-0.5 text-xs bg-black border border-[#262626] rounded text-accent hover:bg-accent hover:text-[#181818] transition flex items-center gap-1";

  return (
    <div className="mb-6 bg-[#191f20] p-4 rounded-lg">
      <div className={`font-bold mb-3 text-lg ${groupColor}`}>
        {group}
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className={chipBase}>
            <SkillIcon name={skill} />
            <span>{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillRow;
