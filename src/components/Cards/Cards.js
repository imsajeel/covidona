import React from "react";
import "./Cards.css";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading";
  }
  return (
    <div className="cards">
      <div className="card cases hoverable">
        <b>Total Cases</b>
        <h1>{confirmed.value}</h1>
        <b>Wed Apr 01, 2020</b>
        <p>Number of confirmed cases of COVID-19.</p>
      </div>
      <div className="card recovers hoverable">
        <b>Recoverds</b>
        <h1>{recovered.value}</h1>
        <b>Wed Apr 01, 2020</b>
        <p>Number of recoveries from COVID-19.</p>
      </div>
      <div className="card deaths hoverable">
        <b>Deaths</b>
        <h1>{deaths.value}</h1>
        <b>Wed Apr 01, 2020</b>
        <p>Number of deaths caused by COVID-19.</p>
      </div>
    </div>
  );
};

export default Cards;
