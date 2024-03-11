import React from "react";
import Toggler from "./Toggler";
import "./style.css";
import Indicator from "./Indicator.js";

class Scene extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLight: true,
    };
  }

  toggleScene() {
    this.setState({
      isLight: !this.state.isLight,
    });
  }

  message(str) {
    
  }

  render() {
    const { isLight } = this.state;
    return (
        <>
      <div className={isLight ? "scene-on" : "scene-off"}>
        <Toggler changeParentState={() => {this.toggleScene()}} />
      </div>
      <Indicator text = "All going good"/>
      </>
    );
  }
}

export default Scene;
