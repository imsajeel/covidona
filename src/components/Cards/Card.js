import React from "react";
import CountUp from "react-countup";

const Card = ({ value, cardname, date }) => {
  return (
    <div className={`card ${cardname} hoverable`}>
      <b>Total Cases</b>
      <h1>
        <CountUp start={0} end={value} duration={2.5} separator="," />
      </h1>
      <b>{date}</b>
      <p>Number of confirmed cases of COVID-19.</p>
    </div>
  );
};

export default Card;
