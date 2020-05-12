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
        <div className="Layout">
          <Cards data={this.state.data} />
        </div>
        <footer className="App-footer">
          <AppFooter />
        </footer>
      </div>
    );
  }
}

export default App;
