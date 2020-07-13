import React from 'react';
import logo from './logo.png';
import './header.style.css';

const Header = () => {
    return ( 
        <img className='headerImage' src={logo}/>
    );
}
 
export default Header;