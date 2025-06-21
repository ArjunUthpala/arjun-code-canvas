
import React, { useState } from "react";
import { Copy } from "lucide-react";

const contact = {
  email: "uthpala.arjun.8367@gmail.com",
  phone: "+94 718 855 719",
  linkedin: "https://linkedin.com/in/ArjunUthpala",
  github: "https://github.com/ArjunUthpala",
  location: "Kurunegala, Sri Lanka",
};

const ContactDetails = () => {
  const [copied, setCopied] = useState<"" | "email" | "phone">("");

  function handleCopy(type: "email" | "phone", text: string) {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 1200);
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-7 font-mono text-xs md:text-[0.97rem] my-3 bg-terminal rounded-md px-3 md:px-4 py-2 border border-[#232323] shadow w-full max-w-5xl">
      <div className="flex items-center gap-1 min-w-0">
        <span className="text-accent flex-shrink-0">Email:</span>
        <span className="ml-1 text-foreground truncate">{contact.email}</span>
        <button
          title="Copy Email"
          onClick={() => handleCopy("email", contact.email)}
          className="text-accent hover:text-[#121212] bg-[#23282f] hover:bg-accent p-1 rounded transition ml-1 flex-shrink-0"
        >
          <Copy size={14} />
        </button>
        {copied === "email" && <span className="ml-2 text-xs text-accent">Copied</span>}
      </div>
      <div className="flex items-center gap-1 min-w-0">
        <span className="text-accent flex-shrink-0">Phone:</span>
        <span className="ml-1 text-foreground">{contact.phone}</span>
        <button
          title="Copy Phone"
          onClick={() => handleCopy("phone", contact.phone)}
          className="text-accent hover:text-[#121212] bg-[#23282f] hover:bg-accent p-1 rounded transition ml-1 flex-shrink-0"
        >
          <Copy size={14} />
        </button>
        {copied === "phone" && <span className="ml-2 text-xs text-accent">Copied</span>}
      </div>
      <div className="flex items-center gap-1 min-w-0">
        <span className="text-accent flex-shrink-0">LinkedIn:</span>
        <a
          href={contact.linkedin}
          className="ml-1 underline text-foreground hover:text-accent truncate"
          target="_blank" rel="noopener noreferrer"
        >/ArjunUthpala</a>
      </div>
      <div className="flex items-center gap-1 min-w-0">
        <span className="text-accent flex-shrink-0">GitHub:</span>
        <a
          href={contact.github}
          className="ml-1 underline text-foreground hover:text-accent truncate"
          target="_blank" rel="noopener noreferrer"
        >/ArjunUthpala</a>
      </div>
      <div className="flex items-center gap-1 min-w-0">
        <span className="text-accent flex-shrink-0">Location:</span>
        <span className="ml-1 text-foreground">{contact.location}</span>
      </div>
    </div>
  );
};

export default ContactDetails;
