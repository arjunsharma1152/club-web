import React from "react";

import { Link } from "react-router-dom";

import {ReactComponent as Logo} from '../../assets/main-logo.svg';

import './header.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
            <h2>PHOTOPEDIA</h2>
        </Link>
       
        <div className="options">
        <Link className='option' to='/shop'>
            SHOP     
        </Link>
        <Link className='option' to='/shop'>
            CONTACT        
        </Link>
        </div>
        </div>
)

export default Header;