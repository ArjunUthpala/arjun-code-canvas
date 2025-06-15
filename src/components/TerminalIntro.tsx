
import React, { useEffect, useRef, useState } from "react";

const textLines = [
  "> Hello, I'm Arjun — Software Engineer with 3+ years of experience building scalable Laravel, Vue, and Flutter apps.",
  "> Currently leading 2 dev teams @ Parallax Technologies."
];

const TerminalIntro: React.FC = () => {
  const [displayed, setDisplayed] = useState<string[]>(["", ""]);
  const [cursor, setCursor] = useState(true);
  const lineIdxRef = useRef(0);
  const charIdxRef = useRef(0);

  useEffect(() => {
    const typeLine = () => {
      let lineIdx = lineIdxRef.current;
      let charIdx = charIdxRef.current;
      if (lineIdx < textLines.length) {
        if (charIdx <= textLines[lineIdx].length) {
          setDisplayed(prev => {
            const copy = [...prev];
            copy[lineIdx] = textLines[lineIdx].slice(0, charIdx);
            return copy;
          });
          charIdxRef.current++;
          setTimeout(typeLine, lineIdx === 0 ? 17 : 23);
        } else {
          lineIdxRef.current++;
          charIdxRef.current = 0;
          setTimeout(typeLine, 540);
        }
      }
    };
    typeLine();
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursor(v => !v), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="font-mono bg-terminal rounded-lg p-6 shadow-lg border border-[#222] w-full md:w-[36rem] min-h-[136px] animate-fade-in">
      <div className="mb-2 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5555]" />
        <span className="w-3 h-3 rounded-full bg-[#fdc700]" />
        <span className="w-3 h-3 rounded-full bg-[#4ce03f]" />
      </div>
      <div>
        <pre className="text-accent font-medium text-sm">
          <span className="select-none text-secondary">bash</span>
        </pre>
        <div className="whitespace-pre-line text-foreground font-mono text-base min-h-[3em]">
          {displayed.map((line, idx) => (
            <div key={idx} className="flex">
              <span>{line}</span>
              {idx === lineIdxRef.current && cursor && <span className="ml-1 text-accent animate-blink">|</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalIntro;
