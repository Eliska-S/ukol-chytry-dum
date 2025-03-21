import React from 'react';
import { useState } from 'react';

const Climate = ({ temperature, humidity }) => {
    const [temp, setTemp] = useState(temperature);

    return(
        <div className='climate'>
            <div className="climate__icon">
				<img src="./assets/temp.svg" />
            </div>
            <div className="climate__content">
				<div className="climate__temperature">{temp}&deg;C</div>
				<div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
			</div>
			<div className="climate__controls">
				<button className="button" onClick={() => setTemp(temp + 1)}>+</button>
				<button className="button" onClick={() => setTemp(temp - 1)}>-</button>
			</div>
		</div>
    )
}

export default Climate;