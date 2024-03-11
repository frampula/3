import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  render() {
    console.log("counter");
    return <h1>Counter</h1>;
  }
}

export default Counter;
