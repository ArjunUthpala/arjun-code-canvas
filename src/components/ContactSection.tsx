
import React, { useState } from "react";
import { Copy } from "lucide-react";

const contact = {
  email: "uthpala.arjun.8367@gmail.com",
  phone: "+94 718 855 719",
  linkedin: "https://linkedin.com/in/ArjunUthpala",
  github: "https://github.com/ArjunUthpala",
  location: "Kurunegala, Sri Lanka",
};

const ContactSection = () => {
  const [copied, setCopied] = useState("");

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1000);
  }

  return (
    <section id="contact" className="mb-10 my-14 w-full max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-3 flex items-center justify-center gap-2 text-center">{"## 📫 Contact"}</h2>
      <div className="bg-terminal rounded-lg border border-[#222] p-6 shadow-lg font-mono text-[1rem] text-foreground">
        <form
          className="flex flex-col gap-4"
          action={`mailto:${contact.email}`}
          method="POST"
        >
          <div className="flex flex-col md:flex-row gap-2">
            <input
              name="Name"
              type="text"
              placeholder="Name"
              className="bg-[#141616] p-2 rounded text-foreground border border-[#1b1b1b] focus:border-accent outline-none font-mono flex-1"
              required
            />
            <input
              name="Email"
              type="email"
              placeholder="Email"
              className="bg-[#141616] p-2 rounded text-foreground border border-[#1b1b1b] focus:border-accent outline-none font-mono flex-1"
              required
            />
          </div>
          <textarea
            name="Message"
            placeholder="Message"
            className="bg-[#141616] p-2 rounded text-foreground border border-[#1b1b1b] focus:border-accent outline-none font-mono min-h-[70px]"
            required
          />
          <button
            type="submit"
            className="bg-accent text-[#121212] font-bold px-6 py-2 mt-2 rounded font-mono shadow hover:scale-105 transition hover:bg-accent/85"
          >
            Send Email ↗
          </button>
        </form>
        <div className="mt-6 flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <span className="text-accent font-mono text-sm">Email:</span>
            <span className="ml-2 text-foreground font-mono">{contact.email}</span>
            <button title="Copy Email" onClick={() => handleCopy(contact.email)} className="ml-1 text-accent hover:text-[#121212] bg-[#23282f] hover:bg-accent p-1.5 rounded transition"><Copy size={13} /></button>
            {copied === contact.email && <span className="text-xs text-accent ml-2">Copied</span>}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-accent font-mono text-sm">Phone:</span>
            <span className="ml-2 text-foreground font-mono">{contact.phone}</span>
            <button title="Copy Phone" onClick={() => handleCopy(contact.phone)} className="ml-1 text-accent hover:text-[#121212] bg-[#23282f] hover:bg-accent p-1.5 rounded transition"><Copy size={13} /></button>
            {copied === contact.phone && <span className="text-xs text-accent ml-2">Copied</span>}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-accent font-mono text-sm">LinkedIn:</span>
            <a href={contact.linkedin} className="ml-2 text-foreground hover:text-accent font-mono underline" target="_blank" rel="noopener noreferrer">/ArjunUthpala</a>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-accent font-mono text-sm">GitHub:</span>
            <a href={contact.github} className="ml-2 text-foreground hover:text-accent font-mono underline" target="_blank" rel="noopener noreferrer">/ArjunUthpala</a>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-accent font-mono text-sm">Location:</span>
            <span className="ml-2 text-foreground font-mono">{contact.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
