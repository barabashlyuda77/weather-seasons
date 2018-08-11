import React from 'react';


const checkbox = (props) => {
    const updateStatusBox = (event) => {
        props.sendBoxStatus(event.target.checked);
    };

    return <div>
        <input
            type="checkbox"
            id="checkbox"
            defaultChecked={true}
            onChange={updateStatusBox}
        />
        <label htmlFor="checkbox">
            Show detailed description
        </label>
    </div>
};

export default checkbox;
