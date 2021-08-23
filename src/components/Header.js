import React from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    {/* <img src="{https://static.thenounproject.com/png/3551850-200.png}" alt="Todoist" /> */}
                    <img src={logo} alt="" />
                </div>
            </nav>
        </header>
    );
}
export default Header;