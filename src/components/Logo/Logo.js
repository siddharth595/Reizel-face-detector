import React from 'react'
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
            
        <div className='tc mt4 ma1' > 
             <div id='Heading'>
<a id='Heading' href="#sa">About Reizel</a>
                    </div>
        <Tilt className="Tilt br2 shadow-2" options={{ max: 50 }} style={{ borderRadius: '15px', height: 140, width: 150 }}>
                <div className="Tilt-inner">
                    <span class="react-logo">
                        <span class="nucleo"> <img className='logo' src={brain} alt="" /> </span>
                    </span>
                </div>
                </Tilt>

        </div>
    );
}
export default Logo;