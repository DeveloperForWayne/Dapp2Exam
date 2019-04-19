import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const randomJson = require("./json/random.json")
const result = randomJson.filter(item => item.isActive == true);
const listItems = result.map((item) =>
    <li>{item.name.first}    {item.name.last}    {item.balance}</li>
);

class App extends Component {
  render() {
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default App;
