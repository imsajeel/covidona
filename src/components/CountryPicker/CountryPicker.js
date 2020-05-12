import React, { useState, useEffect } from "react";

export default function CountryPicker() {
  return (
    <div>
      <select id="cars">
        <option value="Global">Global</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}
