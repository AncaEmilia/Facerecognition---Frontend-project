import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Maia from './Maia.png'
 
const Logo = () => {
    return (
        <div className='ma2 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 250 }} >
            <div className="Tilt-inner pa3">
                <img style={{ height: 140, width: 175 }} alt='logo' src={Maia}/> 
            </div>
            </Tilt>
        </div>
    );
}

export default Logo;
