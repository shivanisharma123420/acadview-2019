import React, { Component } from 'react';
import './App.css';
import Display from './Display'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1>My react app!</h1>
        <h3>This is my first react app</h3>
        <Display name ="Drishti" age = "19" month = "March" />
        <Display name ="Naman" age = "17" month = "December" />

      </div>
    );
  }
}

export default App;
