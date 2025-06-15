
import React, { useEffect, useRef, useState } from "react";

const textLines = [
  "> Hello, I'm Arjun — Software Engineer with 3+ years of experience building scalable Laravel, Vue, and Flutter apps.",
  "> Currently leading 2 dev teams @ Parallax Technologies."
];

const aboutText = [
  "Skilled and self-motivated Software Engineer with nearly 3 years of experience in designing and developing robust PHP Laravel-based back-end services and server-side logic. Proficient in Vue.js for dynamic front-end interfaces and Flutter for cross-platform mobile applications. Currently leading two teams of junior developers at Parallax Technologies (Pvt) Ltd, delivering high-quality, user-centric software solutions.",
  "",
  "Experienced in integrating third-party APIs, conducting performance optimization, and ensuring responsive design across web and mobile platforms. Strong in software debugging and producing clean, maintainable code with proper documentation.",
  "",
  "Demonstrates strong collaboration and teamwork, with proven adaptability in fast-paced environments. Recognized for attention to detail, effective time management, and problem-solving. Actively involved in code reviews, mentoring, and technical hiring processes.",
  "",
  "Currently expanding expertise in DevOps practices and prompt engineering to strengthen automation of developments, scalability, and AI-driven development workflows."
];

const TerminalIntro: React.FC = () => {
  const [displayed, setDisplayed] = useState<string[]>(["", ""]);
  const [cursor, setCursor] = useState(true);
  const lineIdxRef = useRef(0);
  const charIdxRef = useRef(0);
  const [typingDone, setTypingDone] = useState(false);

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
      } else {
        setTypingDone(true);
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
              {idx === lineIdxRef.current && cursor && !typingDone && <span className="ml-1 text-accent animate-blink">|</span>}
            </div>
          ))}
        </div>
        {typingDone && (
          <div className="mt-4 text-secondary text-[1rem] leading-relaxed space-y-3">
            {aboutText.map((p, i) =>
              p ? <p key={i}>{p}</p> : <div key={i} className="h-2" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalIntro;

