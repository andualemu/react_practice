import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: '',
    };
  }
  counterDisplay() {
    this.state.click = 'Hello World!';
    console.log(this.state.click);
  }
  render() {
    return (
      <div id="counter">
        <h1>Hi</h1>;
        {this.counterDisplay()}
      </div>
    );
  }
}

export default Counter;
