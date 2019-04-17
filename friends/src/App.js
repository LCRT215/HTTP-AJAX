import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  render() {
    return <div className="App">Start </div>;
  }
}

export default App;
