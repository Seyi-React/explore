import React from "react";
import "./card.css";
import { MdPersonOutline } from "react-icons/md";
import { BsPersonHearts } from "react-icons/bs";

const Card = () => {
  return (
    <div className="card">
      <div className="card-details">
        <MdPersonOutline size={40} color='#00df9a'/>
        <h4>Single User</h4>
        <h4>$120</h4>
        <p>500GB storage</p>
        <p>1 granted user</p>
        <button>Start trail</button>
      </div>
      <div className="card-details trans">
        <BsPersonHearts size={40} color='#00df9a' />
        <h4>Two User</h4>
        <h4>$180</h4>
        <p>700GB storage</p>
        <p>2 granted user</p>
        <button>Start trail</button>
      </div>
      <div className="card-details">
        <BsPersonHearts size={40} color='#00df9a'/>
        <h4>Multiple User</h4>
        <h4>$200</h4>
        <p>500GB storage</p>
        <p>2+ granted user</p>
        <button>Start trail</button>
      </div>
    </div>
  );
};

export default Card;
