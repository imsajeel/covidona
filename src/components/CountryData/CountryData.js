import React from "react";
import CountryCard from "./CountryCard";

export default function CountryData() {
  return (
    <div>
      <div className="countryName">
        <h1>Pakistan</h1>
      </div>
      <div className="cards">
        <CountryCard
          title="Total Casses"
          value="REAL DATA"
          type="countryConfirmed"
        />
        <CountryCard
          title="Recovered"
          value="REAL DATA"
          type="countryRecovered"
        />
        <CountryCard title="Deaths" value="REAL DATA" type="countryDeaths" />
        <CountryCard title="Tests" value="REAL DATA" type="countryTests" />
      </div>
    </div>
  );
}
