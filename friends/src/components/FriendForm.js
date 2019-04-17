import React from "react";

class FriendForm extends Component {
  constructor() {
    super();
    this.state = {
      newFriend: {
        name: " ",
        age: "",
        email: ""
      }
    };
  }
  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.newFriend.name}
          />
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={this.state.newFriend.age}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.newFriend.email}
          />
        </form>
      </div>
    );
  }
}

export default FriendForm;
