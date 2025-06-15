
import React from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface SkillRowProps {
  group: string;
  skills: string[];
}

const SkillRow: React.FC<SkillRowProps> = ({ group, skills }) => {
  const showCollapse = skills.length > 5;
  const shownSkills = showCollapse ? skills.slice(0, 5) : skills;

  // Use main project colors
  const groupColor = "text-accent";
  const chipBase =
    "font-mono px-2 py-0.5 text-xs bg-[#191f24] border border-[#262626] rounded text-accent hover:bg-accent hover:text-[#181818] transition";

  return (
    <div className="w-full">
      <Collapsible>
        <div className="flex flex-col md:flex-row items-start md:items-center py-3 border-b border-[#222] gap-2 md:gap-6">
          <div className={`min-w-[138px] md:w-48 font-bold ${groupColor} mb-2 md:mb-0`}>
            {group}
          </div>
          <div className="flex flex-wrap gap-2">
            {shownSkills.map((skill) => (
              <span key={skill} className={chipBase}>
                {skill}
              </span>
            ))}
            {showCollapse && (
              <CollapsibleTrigger asChild>
                <button
                  type="button"
                  className="ml-2 flex items-center p-1.5 rounded hover:bg-[#222] transition group"
                  title="Show all skills"
                >
                  <ChevronDown className="w-4 h-4 text-secondary group-data-[state=open]:rotate-180 transition-transform duration-200" />
                  <span className="sr-only">Expand to show all skills</span>
                </button>
              </CollapsibleTrigger>
            )}
          </div>
        </div>
        {showCollapse && (
          <CollapsibleContent>
            <div className="flex flex-wrap gap-2 px-0 pt-2 pb-0">
              {skills.slice(5).map((skill) => (
                <span key={skill} className={chipBase}>
                  {skill}
                </span>
              ))}
            </div>
          </CollapsibleContent>
        )}
      </Collapsible>
    </div>
  );
};

export default SkillRow;
