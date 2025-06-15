
import React, { useEffect, useState } from "react";

interface BashBlockProps {
  children: React.ReactNode;
}

const BashBlock: React.FC<BashBlockProps> = ({ children }) => {
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setCursor((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div
      className="font-mono bg-terminal rounded-lg p-6 shadow-lg border-2 border-white w-full md:w-[48rem] min-h-[88px] animate-fade-in mx-auto mb-4 transition-transform duration-200 hover:scale-[1.022] hover:shadow-[0_0_24px_2px_rgba(255,255,255,0.16)] hover:border-[#fff]"
      style={{
        boxShadow: "0 6px 30px 0 #0002, 0 0 0 3px #fff0",
      }}
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5555]" />
        <span className="w-3 h-3 rounded-full bg-[#fdc700]" />
        <span className="w-3 h-3 rounded-full bg-[#4ce03f]" />
      </div>
      <pre className="text-accent font-medium text-sm">
        <span className="select-none text-secondary">bash</span>
      </pre>
      <div className="mt-4 text-[1rem] leading-relaxed">
        <p className="flex items-start">
          <span className="mr-3 font-bold text-accent">&gt;</span>
          <span className="text-accent">{children}</span>
        </p>
      </div>
    </div>
  );
};

export default BashBlock;

