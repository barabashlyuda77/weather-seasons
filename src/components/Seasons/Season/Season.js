import React, { Component } from 'react';

import './Season.css';

class Season extends Component {
    activateImage =() => this.props.isActive === true ? 'image active': 'image';

    seasonClickHandler = () => {
        this.props.clickHandler(this.props.index);
        this.props.activateAddition(this.props.title);
    }

    render () {
        const myClassName = this.activateImage();

        return (
          <div className="season">
              <p className="title">{this.props.title}</p>
              <img
                  className={myClassName}
                  src={this.props.image}
                  alt={this.props.alt}
                  onClick={this.seasonClickHandler}
              />
         </div>
        );
    }

}

export default Season;
