import React from 'react';

import './SeasonAddition.css';

const texts = [
    { title: 'summer', text: 'Summer' },
    { title: 'autumn', text: 'Autumn' },
    { title: 'winter', text: 'Winter' },
    { title: 'spring', text: 'Spring' }
];

const displayText = (title, texts) => {
    if (!title) {
        return '';
    }

    return texts.find(season => {
        return season.title === title;
    }).text;
}

const SeasonAddition = (props) => {
    const wrapperClassName = props.visible ?  "seasonAddition" : "seasonAddition hide";

    return <div className={wrapperClassName}>
        <p className="text">{displayText(props.season, texts)}</p>
    </div>
}

export default SeasonAddition;
