import React, { Component } from "react";

export class ButtonWithClass extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "Hello",
      title: "2008",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.greeting}</p>
        <button onClick={() => this.setState({ greeting: "Bye" })}>
          Click me!
        </button>
        <button onClick={() => this.setState({ title: "2022" })}>
          Click me!
        </button>
      </div>
    );
  }
}

export default ButtonWithClass;
