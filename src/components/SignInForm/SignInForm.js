import React from "react";
import "./style.css";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    };
  }
  sumbitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  universalChangeHander = ({target: {value, name}}) => {
    this.setState({
        [name]: value
    })
  }

//   changeEmailHandler = (event) => {
//     this.setState({
//         email: event.target.value
//     })
    
//   }
//   changePasswordHandler = (event) => {
//     this.setState({
//         password: event.target.value
//     })
// }
  

  render() {
    return (
      <>
        <h1>Sign In Form</h1>
        <form className="form-wrapper" onSubmit={this.sumbitHandler}>
          <label>
            Type your email
            <input type="email" name='email' onChange={this.universalChangeHander} value={this.state.email}/>
          </label>
          <label>
            Type your password
            <input type="password" name='password' onChange={this.universalChangeHander} value={this.state.password}/>
          </label>

          <button type="sumbit">Send form</button>
        </form>
      </>
    );
  }
}

export default SignInForm;
