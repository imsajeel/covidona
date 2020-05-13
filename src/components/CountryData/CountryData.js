import React from "react";
import CountryCard from "./CountryCard";

export default function CountryData({
  country,
  countryFlag,
  countryData: { confirmed, recovered, deaths },
}) {
  if (!country) {
    return <div></div>;
  } else {
    console.log(countryFlag);
    return (
      <div className="card countryData">
        <div className="countryName">
          <h1>{country}</h1>
        </div>
        <div className="cards">
          <CountryCard
            title="Infected"
            value={confirmed.value}
            type="countryConfirmed"
          />
          <CountryCard
            title="Recovered"
            value={recovered.value}
            type="countryRecovered"
          />
          <CountryCard
            title="Deaths"
            value={deaths.value}
            type="countryDeaths"
          />
        </div>
      </div>
    );
  }
}
