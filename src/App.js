import React, { Component } from 'react';

import './App.css';

import Heading from './components/Heading/Heading';
import Seasons from './components/Seasons/Seasons';
import Addition from './components/Addition/Addition';

class App extends Component {
  state = {
      title: null
  }
  notifyAddition = (title) => {
      this.setState({ title })
  }

  render() {
    return (
      <div className="app">
          <Heading />
          <Seasons
              sendTitleToApp={this.notifyAddition}
           />
          <Addition
              getTitle={this.state.title}
          />
      </div>
    );
  }
}

export default App;
