import React from "react";
import Cards from "./components/Cards/Cards";
import AppFooter from "./components/AppFooter/AppFooter";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" style={{ height: "100px" }} />
      </header>
      <Cards />
      <br />
      <h1 style={{ color: "white" }}>More functionalities will added soon.</h1>
      <footer className="App-footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
