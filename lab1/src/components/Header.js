import React from "react";
import logo from '../logo.svg'
import style from '../App.css'

function Header1(){
    return(
        <nav className='NavBar'>
            <div className = "LeftBar">
            <img src ={logo} className="Logo"/>
            <h4 className="H4L">React Facts</h4>
            </div>
            <div className="LeftNav">
                <h4>React Course - Project 1</h4>
            </div>
        </nav>
    )
}
export default Header1