// import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Counter from './components/counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="test">
        <Counter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
