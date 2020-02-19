import React from 'react';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav';
const Header = ()=>(
    <div className="Header">
        <div className="Header-container">
            <div className="Header-content">
                <div className="Header-logo">
                    <Link to ="/">
                    <img src="https://i.imgur.com/gX9QbOu.pngs" alt="nutricion"/>
                    </Link>
                    <h1>Nutricion</h1>
                </div>
                <div className="Header-nav">
                    <Nav/>
                </div>
            </div>
        </div>
    </div>
);

export default Header;