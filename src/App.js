import React, { Component } from 'react';
import './App.css';
import CloneElement from './CloneElement';
import Context from './Context';


class App extends Component {
  render() {
    return (
      <div className="App">
      <CloneElement />
        <Context />
      </div>
    );
  }
}

export default App;
