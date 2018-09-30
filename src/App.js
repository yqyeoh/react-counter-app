import React, { Component } from "react";
import "./App.css";
import Counters from "./Counters";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="big">Jumpstarter Counters</h1>
        <Counters />
      </div>
    );
  }
}

export default App;
