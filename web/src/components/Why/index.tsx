import React from "react";
import "./why.css";
import reliable from "/src/assets/reliable.png";
import fast from "/src/assets/fast.png";
import cost from "/src/assets/cost.png";
import flexible from "/src/assets/flexible.png";
import open from "/src/assets/open.png";

const features = [
  { title: "Reliable", description: "Built on proven Unix principles", image: reliable },
  { title: "Fast", description: "From prototype to production in minutes", image: fast },
  { title: "Cost-effective", description: "Pay only for what you use", image: cost },
  { title: "Flexible", description: "Use anywhere, scale anytime", image: flexible },
  { title: "Open", description: "No vendor lock-in, full transparency", image: open },
];

const Why: React.FC = () => {
  return (
    <section className="why" id="why">
      <ul className="card">
        <li className="card-why">Why</li>
      </ul>

      {features.map((feature, index) => (
        <ul key={index} className="card">
          <li className="card-title">{feature.title}</li>
          <li className="card-description">{feature.description}</li>
          <img className="card-img" src={feature.image} alt={feature.title} />
        </ul>
      ))}
    </section>
  );
};

export default Why;