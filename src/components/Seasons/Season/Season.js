import React from 'react';

import './Season.css';

const getClassName = (seasonStatus) => seasonStatus === true ? 'image active': 'image';

const Season = (props) => {
    const seasonClickHandler = () => {
        props.onActivate(props.index, props.title);
    }

    const imageClassName = getClassName(props.isActive);

    return (
      <div className="season">
          <p className="title">{props.title}</p>
          <img
              className={imageClassName}
              src={props.image}
              alt={props.alt}
              onClick={seasonClickHandler}
          />
     </div>
    );
}

export default Season;
