import React from "react";
import "./why.css";

const features = [
  { title: "Reliable", description: "Built on battle-tested, timeless Unix principles", icon: 'task_alt' },
  { title: "Fast", description: "From prototype to production in minutes", icon: 'speed' },
  { title: "Ecosystem", description: "Stand on the shoulders of giants", icon: 'hub' },
  { title: "Flexible", description: "Use anywhere, scale anytime", icon: 'tune' },
  { title: "Open", description: "No vendor lock-in, full transparency", icon: 'public' },
];

const Why: React.FC = () => {
  return (
    <section className="why" id="why">
      <ul className="card card-why">
        <li>Why</li>
      </ul>

      {features.map((feature, index) => (
        <ul key={index} className="card">
          <li className="card-title">{feature.title}</li>
          <li className="card-description">{feature.description}</li>
          <span className="material-symbols-outlined">{feature.icon}</span>
        </ul>
      ))}
    </section>
  );
};

export default Why;