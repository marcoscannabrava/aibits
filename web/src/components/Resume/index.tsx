import React from 'react';
import './resume.css';
import aiGraph from "/src/assets/ai-graph.svg";

const Resume: React.FC = () => {
    return (
        <div className="resume">
          <img src={aiGraph} alt="AI Diagram" />
          
          <ul className="description">
            <div className="main-text">
              Unix Philosophy <br />
              Meets <br />
              AI Engineering
            </div>
    
            <p className="subtitle">
              A whole new paradigm for building AI Agents.
            </p>
    
            <p className="functional">Functional Agentic Workflows</p>
          </ul>
        </div>
      );
    };

export default Resume;