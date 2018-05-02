// import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  counter = (props) => {
    return (
      <div>
        <h3>Cookie Collector</h3>
        <img onClick={this.handleCount} src="http://www.freepngimg.com/download/cookie/3-2-cookie-download-png.png" alt="cookie" />
        Cookie Count: {this.state.count}
      </div>
    );
  };

  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div className="test">
        {this.counter()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
