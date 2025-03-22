import React, { useState, useEffect } from "react";
import "./howItWorks.css";

const HowItWorks: React.FC = () => {
  const commands = [
    "curl example.com | lm --summary > summary.md",
    "lm --tags < summary.md",
    "lm --generate-image < summary.md",
    "curl example.com/img.jpg | cv --explain >> summary.md",
  ];

  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleIndex(prev => visibleIndex > commands.length - 1 ? 0 : prev + 1);
    }, 2000); // Show next command every 4 seconds
    return () => clearTimeout(timer);
  }, [visibleIndex]);

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
        </div>
        <div className="terminal-content">
          {commands.slice(0, visibleIndex + 1).map((cmd, index) => (
            <p key={index} className="command-line typewriter">
              {cmd}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
