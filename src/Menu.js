import React from 'react';
import { NavLink } from 'react-router-dom';
import './Components/Menu.css';

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">VegShop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto margin mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" ><NavLink exact activeClassName="active_class" to="/"> Home </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" ><NavLink exact activeClassName="active_class" to="/about"> About US </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" ><NavLink exact activeClassName="active_class" to="/contact"> Contact US </NavLink> </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" ><NavLink exact activeClassName="active_class" to="/info"> Info </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" ><NavLink exact activeClassName="active_class" to="/user"> Blog </NavLink></a>
                            </li>
                        </ul>
        
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Menu;