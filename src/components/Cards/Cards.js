import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card cases hoverable">
        <b>Total Cases</b>
        <h1>00000</h1>
        <b>Wed Apr 01, 2020</b>
        <p>Number of active cases of COVID-19.</p>
      </div>
      <div className="card recovers hoverable">
        <b>Recoverds</b>
        <h1>000000000000</h1>
        <b>Wed Apr 01, 2020</b>
        <p>Number of recoveries from COVID-19.</p>
      </div>
      <div className="card deaths hoverable">
        <b>Deaths</b>
        <h1>0000</h1>
        <b>Wed Apr 01, 2020</b>
        <p>Number of deaths caused by COVID-19.</p>
      </div>
    </div>
  );
};

export default Cards;
