import React from "react";
import NewCounter from "../New Counter/NewCounter";
import NewCounterFunction from "../New Counter/NewCounterFunction";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    render() {
        return (
          <NewCounterFunction />
        )
    }
}

export default App;