import React, { Component } from 'react';

import './Seasons.css';

import Season from './Season/Season';

import Summer from '../../images/summer.jpeg';
import Autumn from '../../images/autumn.jpeg';
import Winter from '../../images/winter.jpeg';
import Spring from '../../images/spring.jpeg';

const seasons = [
    { title: 'summer', image: Summer },
    { title: 'autumn', image: Autumn },
    { title: 'winter', image: Winter },
    { title: 'spring', image: Spring }
]

class Seasons extends Component {
    state = {
        activeSeasonIndex: null
    }

    activateSeason = (clickedSeasonIndex, seasonTitle) => {
        this.props.onSeasonChange(seasonTitle);
        this.setState({ activeSeasonIndex: clickedSeasonIndex });
    }

    render () {
        return (
            <div className="seasons">
                {seasons.map((season, index) =>
                    <Season
                        key={season.title}
                        index={index}
                        alt={season.title}
                        title={season.title}
                        image={season.image}
                        isActive={index === this.state.activeSeasonIndex}
                        onActivate={this.activateSeason}
                    />
                )}
            </div>
        );
    }
}

export default Seasons;
