import React, { Component } from 'react';

import './App.css';

import Heading from './components/Heading/Heading';
import Seasons from './components/Seasons/Seasons';
import SeasonAddition from './components/SeasonAddition/SeasonAddition';
import Checkbox from './components/Checkbox/Checkbox';

class App extends Component {
  state = {
      season: null,
      checkboxChecked: true
  }

  changeSeason = (season) => {
      this.setState({ season })
  }

  updateCheckboxStatus = (isChecked) => {
      this.setState({ checkboxChecked: isChecked })
  }

  render() {
    return (
      <div className="app">
          <Heading />
          <Checkbox
              onChange={this.updateCheckboxStatus}
          />
          <Seasons
              onSeasonChange={this.changeSeason}
           />
          <SeasonAddition
              season={this.state.season}
              visible={this.state.checkboxChecked}
          />
      </div>
    );
  }
}

export default App;
