import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import logo from '../../images/logo-sidebar.png'

const Header = () => {
    return(
        <div className="sidebar-header-container">
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
        </div>
    )
}

export default Header;