import React from "react";
import Tilt from 'react-parallax-tilt';
import Logos from '../../assets/logo.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0" style={{ width: '225px' }}>
            <Tilt className="Tilt br2 shadow-2">
                <div className="imagine">
                    <img src={Logos} width='150px' height='150px' alt="logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;
