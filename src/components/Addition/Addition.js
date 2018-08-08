import React from 'react';

import './Addition.css';

const texts = [
    { title: 'summer', text: 'Summer' },
    { title: 'autumn', text: 'Autumn' },
    { title: 'winter', text: 'Winter' },
    { title: 'spring', text: 'Spring' }
];

const displayText = (title, array) => {
    if (!title) {
        return '';
    }
    
    return array.find(season => {
        return season.title === title;
    }).text;
}

const addition = (props) => {
    return <div className="addition">
        <p className="text">{displayText(props.getTitle, texts)}</p>
    </div>
}

export default addition;
