import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">My Feed</h1>
        </header>
        <News subject='apple'/>
      </div>
    );
  }
}

export default App;
