import React, { Component } from 'react';

import './Seasons.css';

import Season from './Season/Season';

import Summer from '../../images/summer.jpeg';
import Autumn from '../../images/autumn.jpeg';
import Winter from '../../images/winter.jpeg';
import Spring from '../../images/spring.jpeg';

const weatherSeasons = [
    { title: 'summer', image: Summer },
    { title: 'autumn', image: Autumn },
    { title: 'winter', image: Winter },
    { title: 'spring', image: Spring }
]

class Seasons extends Component {
    state = {
        activeImg: null
    }

    showImage = (clickedSeasonIndex) =>
        this.setState({ activeImg: clickedSeasonIndex });

    notifyApp = (title) => {
        this.props.sendTitleToApp(title);
    }

    render () {
        return (
            <div className="seasons">
                {weatherSeasons.map((season, index) =>
                    <Season
                        key={season.title}
                        index={index}
                        alt={season.title}
                        title={season.title}
                        image={season.image}
                        isActive={index === this.state.activeImg ? true : false}
                        clickHandler={this.showImage}
                        activateAddition={this.notifyApp}
                    />
                )}
            </div>
        );
    }
}

export default Seasons;
