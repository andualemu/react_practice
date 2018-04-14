// import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => {
  return <div className="test">All the React are belong to us!</div>;
};

ReactDOM.render(<App />, document.getElementById('main'));

// let num = 0;
// setInterval(
//   () => {
//     $('#main').html(`You've been on this page for ${num} seconds`);
//     num += 1;
//   },
//   1000,
// );
