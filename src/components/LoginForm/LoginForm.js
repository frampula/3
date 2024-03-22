import React, { Component } from "react";
import * as yup from 'yup'

const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  }

  const SIGN_UP_SCHEMA = yup.object({
    firstName: yup.string().required().min(1).max(30),
    lastName: yup.string().required().min(1).max(30),
    firstName: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
  })

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        ...initialState
    }
  }

  changeHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
      event.preventDefault();
      SIGN_UP_SCHEMA.isValidSync(initialState)
  }

  render() {
    const { email, password, firstName, lastName } = this.state;

    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={firstName}
          placeholder="Type your first name"
          name="firstName"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Type your last name"
          name="lastName"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          value={email}
          placeholder="Type your email"
          name="email"
          onChange={this.changeHandler}
        />
        <input
          type="text"
          value={password}
          placeholder="Type your password"
          name="password"
          onChange={this.changeHandler}
        />
        <button>Login</button>
      </form>
    );
  }
}

export default SignUpForm;
