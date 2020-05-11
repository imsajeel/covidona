import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import AppFooter from "./components/AppFooter/AppFooter";
import logo from "./logo.png";
import "./App.css";

import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    // const { data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Logo" style={{ height: "100px" }} />
        </header>
        <Cards data={this.state.data} />
        <br />
        <h1 style={{ color: "white" }}>
          More functionalities will added soon.
        </h1>
        <footer className="App-footer">
          <AppFooter />
        </footer>
      </div>
    );
  }
}

export default App;
