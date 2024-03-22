import React from "react";
import TreeWithTheme from "./Tree/Tree";
import { UserContext } from '../contexts/userContext';
import { ThemeContext } from "../contexts/themeContext";
import CONSTANTS from "../constants";
import SignUpForm from "./LoginForm/LoginForm";
const { THEMES } = CONSTANTS;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    
    render() {
        return (
          <SignUpForm />
        )
    }
}

export default App;