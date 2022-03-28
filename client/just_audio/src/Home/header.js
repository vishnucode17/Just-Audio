import React from 'react';
import logo from '../static/images/Just Audio.svg';
import '../static/css/header.css';
function Header() {
    return (
        <>
            <div className="header_nav">
                <div className="header_nav">
                    <div className="header_nav_left_logo">
                        <a href="/">
                            <img src={logo} alt="" />
                            <p id="logo_text">Just Audio</p>
                        </a>
                    </div>
                    <div className="header_nav_right_menu">
                        <ul>
                            <li><a href="/" className="nav_links">Home</a></li>
                            <li><a href="/play" className="nav_links">Explore</a></li>
                            <li><a href="/login" className="nav_links">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;