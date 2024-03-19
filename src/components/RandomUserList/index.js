import React, { Component } from "react";

class RandomUserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          users: data.results,
        });
    });
  }
  renderUsers() {
    return this.state.users.map((item) => {
      return (
        <li>
          <p>
            {item.name.first} {item.name.last}
          </p>
        </li>
      );
    });
  }
  render() {
    return <ol>{this.renderUsers()}</ol>;
  }
}

export default RandomUserList;
