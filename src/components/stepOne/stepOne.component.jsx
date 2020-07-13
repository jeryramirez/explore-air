import React from 'react';

import './stepOne.style.css';

const StepOne = () => {
    return ( 
        <div className='step-one'>
            <h2>Stem #1:</h2>
            <h3>Choose Your Offer</h3>
            <form action="">
                <div className='choose first'>
                    <input className='step-one-input' type="radio" />
                    <div className="choose-info">
                        <p className="title">1 Explore Air</p>
                        <div className="price">
                            <p className="price prive-before">5 761 </p>
                            <p className="price price-after">34 565</p>
                        </div>
                        
                    </div>
                </div>

                <div className='choose second'>
                    <input className='step-one-input' type="radio" />
                    <div className="choose-info">
                        <p className="title">1 Explore Air</p>
                        <div className="price">
                            <p className="price prive-before">5 761 </p>
                            <p className="price price-after">34 565</p>
                        </div>
                        
                    </div>
                </div>

                <div className='choose three'>
                    <input className='step-one-input' type="radio" />
                    <div className="choose-info">
                        <p className="title">1 Explore Air</p>
                        <div className="price">
                            <p className="price prive-before">5 761 </p>
                            <p className="price price-after">34 565</p>
                        </div>
                        
                    </div>
                </div>

            </form>
        </div>
     );
}
 
export default StepOne;