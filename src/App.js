import React, { Component } from 'react';
import './App.css';
import CloneElement from './CloneElement';
import Context from './Context';
import Hoc from './ButtonOne';
import Candy from './Candy';
import ToggleRPC from './renderProps/ToggleRPC';
import ToggleRenderProps from './renderProps/ToggleRenderProps'


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
        //render
        <ToggleRenderProps render={({name, on, toggle})=>(
            <div>
                <h1>{name}</h1>
                { on&&<h1>Show me!</h1>}
                <button onClick={toggle}> Show/Hide</button>
            </div>
        )} / >
        //children
        <ToggleRPC>
         {({name, on, toggle})=>(
            <div>
                <h1>{name}</h1>
                { on&&<h1>Show me!</h1>}
                <button onClick={toggle}> Show/Hide</button>
            </div>
        )}
        </ToggleRPC>
      </div>
    );
  }
}

export default App;
