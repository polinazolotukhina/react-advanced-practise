import React, { Component } from 'react';
import './App.css';
import CloneElement from './CloneElement';
import Context from './Context';
import Hoc from './ButtonOne';


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
      </div>
    );
  }
}

export default App;
