import React from "react";
import logo from '../logo.svg';

function Header() {
    return (
        <header>
            <nav className="NavBar1">
                <img src={logo} alt="logo" width="100px" className="image"/>
                <ul className="nav1">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header