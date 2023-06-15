import React from "react";
import "./analytics.css";
import Laptop from "../../assets/laptop.jpg";
import World from '../../assets/world.png'
import { Link } from "react-router-dom";

const Analytics = () => {
  return (
    <>
    <div className="data-analytic">
      <div>
        <img src={Laptop} alt="" className="laptop" />
      </div>
      < div className="dash">
        <h1>DATA ANALYTIC DASHBOARD</h1>
        <h4>Manage Data Analytics</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quibusdam tenetur, dicta optio repellat quidem, fugiat voluptate
          libero ad mollitia adipisci animi illum voluptatum, unde incidunt
          accusamus doloremque architecto qui.
        </p>
         <Link to='/resource'>
           <button>Get Started</button>
         </Link>
      </div>
     
    </div>
    <div className="data-analytic">
   
        <div className="dash">
        <h1>EXPLORE WITH WORLD ANALYTIC</h1>
        <h4>World Analytics Explores..</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quibusdam tenetur, dicta optio repellat quidem, fugiat voluptate
          libero ad mollitia adipisci animi illum voluptatum, unde incidunt
          accusamus doloremque architecto qui.
        </p>
         <Link to='/resource'>
           <button>Get Started</button>
         </Link>
        </div>
        <div >
         <img src={World} alt=""  className="laptop"/>
      </div>
    </div>
    </>
  );
};

export default Analytics;
