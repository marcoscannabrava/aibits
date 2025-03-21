import React from "react";
import "./howItWorks.css";

const HowItWorks: React.FC = () => {
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
          <span className="prompt">$ </span>
          <span className="command typing">curl example.com | lm --summary > summary.md</span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
