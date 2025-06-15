
import React from "react";

const Header = () => (
  <header className="sticky top-0 z-20 bg-[#181818]/90 backdrop-blur-md border-b border-[#222] font-mono h-12">
    <div className="max-w-[1200px] mx-auto flex items-center justify-between px-8 h-12">
      {/* Empty/minimal top bar for sticky shadow/border effect */}
      <span />
    </div>
  </header>
);

export default Header;
