import React from "react";
import "./howItWorks.css";

const HowItWorks: React.FC = () => {
  const commands = [
    "curl example.com | lm --summary > summary.md",
    "lm --tags < summary.md",
    "lm --generate-image < summary.md",
    "curl example.com/img.jpg | cv --explain >> summary.md",
  ];

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
          <p className="prompt">$ </p>
          {commands.map((cmd, index) => (
            <div key={index} className="command-line typewriter">
              <p className="command">{cmd}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
