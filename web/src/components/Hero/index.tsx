import React from "react";
import "./hero.css";
import logo from "/src/assets/logo-simple.svg";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="logo">
        <img src={logo} alt="AI bits Logo" />
        <span className="logo-text ubuntu-bold">bits</span>
      </div>
      <p>
        The power of <span>Unix Pipelines</span> and <span>AI</span>. <br />
        Reliable. Fast. Open-Source.
      </p>
    </div>
  );
};

export default Hero;