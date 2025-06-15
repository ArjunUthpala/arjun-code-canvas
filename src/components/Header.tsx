
import React from "react";
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => (
  <header className="sticky top-0 z-20 bg-[#181818]/90 backdrop-blur-md border-b border-[#222] font-mono">
    <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8 h-16">
      <span className="text-xl text-accent font-bold tracking-wider">
        Arjun Uthpala <span className="text-secondary font-normal">|</span> <span className="text-secondary">Software Engineer</span>
      </span>
      <nav>
        <ul className="flex gap-6">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className="text-foreground hover:text-accent font-medium transition-colors story-link px-1 py-0.5">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
