import './Header.css'
import logo from'./logo.svg'
import bell from './bell.svg'
import React from "react";
import { NavLink } from 'react-router-dom';

function Header(){
    return (
        <div id='header'>
            <div id='header-content'>

                <div id='logo'>
                    <img src={logo} alt="" />
                </div>

                <ul id="right_navbar_block">
                    <li className="navbar_elem">
                        <NavLink to="/cources" className="navlink">
                            о нас
                        </NavLink>
                    </li>

                    <li className="navbar_elem">
                        <NavLink to="/" className="navlink">
                            курсы
                        </NavLink>
                    </li>

                    <li className="navbar_elem">
                        <img src={bell} id="bell_icon" alt="" />
                    </li>
                    <li className="navbar_elem">
                        <div id="avatar">
                        </div>
                    </li>
                </ul>

            </div>



        </div>
    )
}
export default Header;