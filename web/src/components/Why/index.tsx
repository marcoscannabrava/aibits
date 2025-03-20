import React from 'react';
import './why.css';
import reliable from "/src/assets/reliable.png";
import fast from "/src/assets/fast.png";
import cost from "/src/assets/cost.png";
import flexible from "/src/assets/flexible.png";
import open from "/src/assets/open.png";

const Why: React.FC = () => {
    return (
        <section className="why" id='why'>
            <ul className="card">
                <li className='card-why'>Why</li>
            </ul>

            <ul className="card">
                <li className='card-title'>Reliable</li>
                <li className='card-description'>Built on proven Unix principles</li>
                <img className='card-img' src={reliable} alt="" />
            </ul>

            <ul className="card">
                <li className='card-title'>Fast</li>
                <li className='card-description'>From prototype to production in minutes</li>
                <img className='card-img' src={fast} alt="" />
            </ul>

            <ul className="card">
                <li className='card-title'>Cost-effective</li>
                <li className='card-description'>Pay only for what you use</li>
                <img className='card-img' src={cost} alt="" />
            </ul>

            <ul className="card">
                <li className='card-title'>Flexible</li>
                <li className='card-description'>Use anywhere, scale anytime</li>
                <img className='card-img' src={flexible} alt="" />
            </ul>

            <ul className="card">
                <li className='card-title'>Open</li>
                <li className='card-description'>No vendor lock-in, full transparency</li>
                <img className='card-img' src={open} alt="" />
            </ul>
        </section>
      );
};

export default Why;