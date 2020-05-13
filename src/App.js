import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryData from "./components/CountryData/CountryData";
import AppFooter from "./components/AppFooter/AppFooter";
import logo from "./logo.png";
import "./App.css";

import { fetchData, fetchCountryData } from "./api";
import CountryPicker from "./components/CountryPicker/CountryPicker";

class App extends Component {
  state = {
    data: {},
    country: "",
    countryData: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    // fetch data
    const fetchedCountryData = await fetchCountryData(country);
    // set state
    this.setState({
      country: country,
      countryData: fetchedCountryData,
    });
  };

  render() {
    // const { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Logo" />
        </header>
        <div className="Layout">
          <Cards data={this.state.data} />
          <div className="container dark-alpha">
            <b>More Details</b>
            <br />
            <br />
            <div className="card countryData">
              <CountryPicker handleCountryChange={this.handleCountryChange} />
            </div>

            <CountryData
              country={this.state.country}
              countryData={this.state.countryData}
            />
            <Chart />
          </div>
        </div>
        <footer className="App-footer">
          <AppFooter />
        </footer>
      </div>
    );
  }
}

export default App;
