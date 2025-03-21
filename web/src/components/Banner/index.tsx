import React from "react";
import "./banner.css";
import logo from "/src/assets/logo.png";

const Banner: React.FC = () => {
  return (
    <div className="introduction">
      <img src={logo} alt="AI bits Logo" />
      <p>
        The power of <span>Unix Pipelines</span> and <span>AI</span>. <br />
        Reliable. Fast. Open-Source.
      </p>
    </div>
  );
};

export default Banner;