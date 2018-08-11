import React, { Component } from 'react';

import './App.css';

import Heading from './components/Heading/Heading';
import Seasons from './components/Seasons/Seasons';
import Addition from './components/Addition/Addition';
import Checkbox from './components/Checkbox/Checkbox';


class App extends Component {
  state = {
      title: null,
      checked: true
  }
  notifyAddition = (title) => {
      this.setState({ title })
  }

  displayAddition = (status) => {
      this.setState({ checked: status })
  }

  render() {
    return (
      <div className="app">
          <Heading />
          <Checkbox
              sendBoxStatus={this.displayAddition}
          />
          <Seasons
              sendTitleToApp={this.notifyAddition}
           />
          <Addition
              getTitle={this.state.title}
              getBoxStatus={this.state.checked}
          />
      </div>
    );
  }
}

export default App;
