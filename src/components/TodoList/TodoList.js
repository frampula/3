import { render } from "@testing-library/react";
import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TodoList: [
        { id: 1, text: "go to party" },
        { id: 2, text: "meet friends" },
        { id: 3, text: "have a walk" },
      ],
    };
  }

  renderLi() {
    const {TodoList} = this.state

    return TodoList.map((task) => <li key={task.id}>{task.text}</li>)
  }

  render() {
    return (
        <>
        <h1>TODOLIST</h1>
        <ul>
            {this.renderLi()}
        </ul>
        </>
    )
}
}



export default TodoList;
