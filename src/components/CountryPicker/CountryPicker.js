import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";

export default function CountryPicker() {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <div>
      <div className="card">
        <select className="countrySelect" name="counties" id="countries">
          <option value="default">Pakistan (default)</option>
          {fetchedCountries.map((country) => (
            <option value={country}>{country}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
