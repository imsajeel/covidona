import React from "react";
import CountUp from "react-countup";

export default function CountryCard({ title, value, type }) {
  return (
    <div>
      <div className={`card ${type}`}>
        <b>{title}</b>
        <h1>
          <CountUp start={0} end={value} duration={2.5} separator="," />
        </h1>
      </div>
    </div>
  );
}
