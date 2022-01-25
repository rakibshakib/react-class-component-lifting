import React from 'react';

const IsBoiledWater = ({ celsius = 0 }) => {
    if (celsius >= 100) {
        return <p className='msg-positive'>The water would boil. 😁😀</p>;
    }
    return <p className='msg-negative'>Water would not boil. 😐🥱</p>;
};

export default IsBoiledWater;
