import { render } from "@testing-library/react";
import React from "react";
import TodoForm from "./TodoForm/TodoForm";
import styles from './TodoListStyle.module.css'

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

  removeTask(taskIDtoRemove) {
    const { TodoList } = this.state;

    const filteredArray = TodoList.filter((task) => task.id !== taskIDtoRemove);

    this.setState({
      TodoList: filteredArray,
    });
  }

  renderLi() {
    const { TodoList } = this.state;

    return TodoList.map((task) => (
      <li key={task.id}>
        {task.text}
        <button
          onClick={() => {
            this.removeTask(task.id);
          }}
        >
          X
        </button>
      </li>
    ));
  }

  formHandler = (text) => {
      const { TodoList } = this.state

      const newObj = {
        id: TodoList.length + 1,
        text
      }
      
      const newArr = [...TodoList, newObj]

      this.setState({
        TodoList: newArr
      })
  }

  render() {
    return (
      <>
        <h1>TODOLIST</h1>
        <TodoForm sendData={this.formHandler}/>
        <ul className={styles.container}>{this.renderLi()}</ul>
      </>
    );
  }
}

export default TodoList;
