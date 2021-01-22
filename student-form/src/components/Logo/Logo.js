import React from 'react';
import VeenaLogo from '../../assets/images/VeenaLogo.png'; 

import './Logo.css';
const logo = (props) => (
    <div className="logo">
        <img src={VeenaLogo} alt="MyLogo" />
    </div>
);

export default logo;