import React from "react";
import "./Cards.css";
import Card from "./Card";
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
      return (
      <div className="cards">
        <Card
          value={confirmed.value}
          cardname="confirmed"
          date={new Date(lastUpdate).toDateString()}
        />
        <Card
          value={recovered.value}
          cardname="recovered"
          date={new Date(lastUpdate).toDateString()}
        />
        <Card
          value={deaths.value}
          cardname="deaths"
          date={new Date(lastUpdate).toDateString()}
        />
      </div>
      );
    </div>
  );
};

export default Cards;
