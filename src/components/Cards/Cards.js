import React from "react";
import "./Cards.css";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return (
      <div className="cards">
        <h1 style={{ color: "white", fontSize: "32px" }}>Loading....</h1>
      </div>
    );
  }
  return (
    <div className="cards">
      <div className="card cases hoverable">
        <b>Total Cases</b>
        <h1>
          <CountUp
            start={0}
            end={confirmed.value}
            duration={2.5}
            separator=","
          />
        </h1>
        <b>{new Date(lastUpdate).toDateString()}</b>
        <p>Number of confirmed cases of COVID-19.</p>
      </div>
      <div className="card recovers hoverable">
        <b>Recoverds</b>
        <h1>
          <CountUp
            start={0}
            end={recovered.value}
            duration={2.5}
            separator=","
          />
        </h1>
        <b>{new Date(lastUpdate).toDateString()}</b>
        <p>Number of recoveries from COVID-19.</p>
      </div>
      <div className="card deaths hoverable">
        <b>Deaths</b>
        <h1>
          <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
        </h1>
        <b>{new Date(lastUpdate).toDateString()}</b>
        <p>Number of deaths caused by COVID-19.</p>
      </div>
    </div>
  );
};

export default Cards;
