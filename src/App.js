import React, { Component } from 'react';

import './App.css';

import Heading from './components/Heading/Heading';
import Seasons from './components/Seasons/Seasons';
import Addition from './components/Addition/Addition';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Heading />
          <Seasons />
          <Addition />
      </div>
    );
  }
}

export default App;
