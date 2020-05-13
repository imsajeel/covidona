import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";

export default function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <div>
      <div className="card">
        <select
          className="countrySelect"
          name="counties"
          id="countries"
          onChange={(event) => {
            handleCountryChange(event.target.value);
          }}
        >
          <option value="">Please select a country</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
