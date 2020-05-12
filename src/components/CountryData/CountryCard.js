import React from "react";

export default function CountryCard({ title, value, type }) {
  return (
    <div>
      <div className={`card ${type}`}>
        <b>{title}</b>
        <h3>{value}</h3>
      </div>
    </div>
  );
}
