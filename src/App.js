import React, { Component } from 'react';
import './App.css';
import CloneElement from './CloneElement';
import Context from './Context';
import Hoc from './ButtonOne';
import Candy from './Candy';


class App extends Component {
  render() {
    return (
      <div className="App">
    {
        //   <CloneElement />
    //     <Context />
    }   <Hoc disable/>
        <Hoc />
        <Hoc  error/>
        <Candy />
      </div>
    );
  }
}

export default App;
