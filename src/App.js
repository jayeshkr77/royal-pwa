import React, { Component } from 'react';
import Main from './components/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
