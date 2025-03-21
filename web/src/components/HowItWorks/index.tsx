import React, { useEffect } from "react";
import "./howItWorks.css";

const HowItWorks: React.FC = () => {
  const commands = [
    "curl example.com | lm --summary > summary.md",
    "lm --tags < summary.md",
    "lm --generate-image < summary.md",
    "curl example.com/image.jpg | cv --explain >> summary.md",
  ];

  useEffect(() => {
    const commandLines = document.querySelectorAll(".command-line");
    commandLines.forEach((commandLine, index) => {
      setInterval(() => {
        commandLine.classList.remove("hidden");
      }, 2000 * index);
    });
  }, []);

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
          {commands.map((cmd, index) => (
            <div key={index} className="command-line hidden">
              <span className="prompt">$ </span>
              <span className="command typing">{cmd}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
