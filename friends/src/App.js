import React, { Component } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";
// import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Test</h1>

        <FriendForm />
        {this.state.friends.map(friend => (
          <FriendList friend={friend} key={friend.id} />
        ))}
      </div>
    );
  }
}

export default App;
