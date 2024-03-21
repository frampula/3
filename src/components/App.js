import React from "react";
import Tree from "./Tree/Tree";
import { UserContext } from "../contexts/userContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "John",
        lastName: "Doe",
        emil: "johndoe@gmail.com",
        avatar:
          "https://i.pinimg.com/564x/52/b5/db/52b5db69f1a3073c263f6f7d22a37c3d.jpg",
      },
    };
  }

  render() {                                                                                                                                                                                                                                                                                                                                                          
    return (<UserContext.Provider value={this.state.user}>
    <Tree />
    </UserContext.Provider>);
  }
}

export default App;
