import React, { Fragment } from 'react';
import { ReactComponent as Icon } from './circle-right.svg';

import './description.style.css';

const Description = () => {
    return (
        <Fragment>

        <div className='description'>
            <Icon className='arrow'/>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reiciendis sequi eum incidunt</p>
            </div>
            </div>
            <div className='description'>
            <Icon className='arrow'/>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reiciendis sequi eum incidunt</p>
            </div>
            </div>
            <div className='description'>
            <Icon className='arrow'/>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reiciendis sequi eum incidunt</p>
            </div>
            </div>
            <div className='description'>
            <Icon className='arrow'/>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reiciendis sequi eum incidunt</p>
            </div>
            </div>
            <div className='description'>
            <Icon className='arrow'/>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia reiciendis sequi eum incidunt</p>
            </div>
        </div>
        </Fragment>


    );
}

export default Description;