import React, { Component } from "react";
import styles from "./TodoFormStyle.module.css";
import cx from "classnames";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskText: "",
      isInputValid: true,
    };
  }

  changeHandler = ({ target: { value, name } }) => {
    if (value.includes("*")) {
      this.setState({
        isInputValid: false,
      });
    } else {
      this.setState({
        [name]: value,
        isInputValid: true,
      });
    }
  };

  submitHandler = (event) => {
    const {
      props: { sendData },
      state: { taskText },
    } = this;

    event.preventDefault();

    sendData(taskText);

    this.setState({
      taskText: "",
    });
  };

  render() {
    const { taskText, isInputValid } = this.state;

    const className = cx({
      [styles.input]: true,
      [styles["invalid-input"]]: isInputValid === false,
    });

    return (
      <form onSubmit={this.submitHandler} className={styles.container}>
        <input
          type="text"
          // className={isInputValid ? '' : styles['invalid-input']}
          className={className}
          value={taskText}
          name="taskText"
          onChange={this.changeHandler}
        />
        <button type="submit">Add task</button>
      </form>
    );
  }
}

export default TodoForm;

// function cx(objectClassNames) {
//     // const cort = Object.entries(objectClassNames);
//     // const filteredArray = cort.filter(([className, condition]) => condition);
//     // const mapArray = filteredArray.map(([className, condition]) => className)
//     // return mapArray.join(' ');

//     return Object.entries(objectClassNames)
//     .filter(([className, condition]) => condition)
//     .map(([className, condition]) => className)
//     .join(' ');
// }
