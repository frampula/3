import React, { Component } from "react";

class TVloader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tv: [],
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount() {
    this.load()
  }

  load = () => {
    fetch('./tv.json')
    .then((response) => response.json())
    .then((tv) => {
        this.setState ({
            tv
        })
    })
    .catch((error) => {
        this.setState ({
            isError: error
        })
    })
    .finally(() => {
        this.setState({
            isLoading: false
        })
    })
  }

  render() {
    const { tv,isError,isLoading } = this.state
    return (
    <>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error happening: {isError.message}!</div>}

            <ul>
                {tv.map((currentTV) => {
                    return <li>Brand:{currentTV.brand} --- Model:{currentTV.model} --- Price: {currentTV.price}</li>
                })}
            </ul>
    </>
    );
  }
}

export default TVloader;
