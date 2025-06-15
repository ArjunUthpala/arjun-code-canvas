
import React from "react";
import {
  Github,
  GitBranch,
  Hammer,
  Settings,
  Terminal,
  Figma,
  Database,
  Cloud,
  Server,
  Layers,
  Wrench,
  Cog,
  Users,
  Zap,
  BookText,
  Send, // Use Send icon for Postman
} from "lucide-react";

type SkillIconProps = {
  name: string;
  size?: number;
  className?: string;
};

const iconMap: Record<string, React.ReactNode> = {
  // Tools
  Github: <Github size={15} className="inline mr-1 align-[-2px]" />,
  "Github Actions": <GitBranch size={15} className="inline mr-1 align-[-2px]" />,
  Jenkins: <Hammer size={15} className="inline mr-1 align-[-2px]" />,
  Postman: <Send size={15} className="inline mr-1 align-[-2px]" />,
  dbForge: <Database size={15} className="inline mr-1 align-[-2px]" />,
  DBeaver: <Database size={15} className="inline mr-1 align-[-2px]" />,
  Figma: <Figma size={15} className="inline mr-1 align-[-2px]" />,
  Canva: <BookText size={15} className="inline mr-1 align-[-2px]" />,
  Termius: <Terminal size={15} className="inline mr-1 align-[-2px]" />,
  // Cloud
  Azure: <Cloud size={15} className="inline mr-1 align-[-2px]" />,
  Huawei: <Cloud size={15} className="inline mr-1 align-[-2px]" />,
  // Databases
  MySQL: <Database size={15} className="inline mr-1 align-[-2px]" />,
  MSSQL: <Database size={15} className="inline mr-1 align-[-2px]" />,
  Firestore: <Database size={15} className="inline mr-1 align-[-2px]" />,
  // Frameworks/languages (for example purposes, map to generic icons)
  Laravel: <Layers size={15} className="inline mr-1 align-[-2px]" />,
  "Vue.js": <Zap size={15} className="inline mr-1 align-[-2px]" />,
  Flutter: <Zap size={15} className="inline mr-1 align-[-2px]" />,
  // AI
  ChatGPT: <Cog size={15} className="inline mr-1 align-[-2px]" />,
  "Github Copilot": <Cog size={15} className="inline mr-1 align-[-2px]" />,
  "Google Gemini": <Cog size={15} className="inline mr-1 align-[-2px]" />,
  Loveable: <HeartIcon size={15} className="inline mr-1 align-[-2px]" />,
};

function HeartIcon({ size = 15, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      className={className}
    >
      <path
        d="M12 21s-3.3-2.1-5.5-4.3C4 14.2 2 11.9 2 9.5 2 6.7 4.2 4.5 7 4.5c1.5 0 2.9 0.9 3.7 2.2C11.9 5.4 13.3 4.5 14.8 4.5c2.8 0 5 2.2 5 5 0 2.4-2 4.7-4.5 7.2C15.3 18.9 12 21 12 21z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SkillIcon: React.FC<SkillIconProps> = ({ name }) => {
  // To match case insensitively and support variants
  const found = Object.keys(iconMap).find(
    key => key.toLowerCase() === name.toLowerCase()
  );
  if (found) return iconMap[found] as React.ReactNode;
  return null;
};

export default SkillIcon;
