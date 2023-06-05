import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from './About'
import Contact from "./Contact";
import Sales from './Sales'
import ServiceCloud from './Servicecloud'
import Cpql from './Cpql'
import Heroq from './Heroku'
import Home from "./Home";

function Menus() {

    const HOME_PAGE = "/"
    const ABOUT_US_PAGE = "/aboutUS";
    const CONTANCT_US_PAGE = "/contactUs"
    const SALES_CLOUD_PAGE = "/salesCloud";
    const SERVICE_CLOUD_PAGE = "/serviceCloud";
    const HEROKU_PAGE = "/heruko";
    const CPQL_PAGE = "/cpql";


    return (
        <div className="container-fluid">
            <nav id="navbar" className="navbar">
                <header id="header" className="d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                        <h1 className="logo me-auto"><Link classNameName="nav-link scrollto active" to="/">Website Name</Link></h1>
                    </div>

                </header>
                <ul>
                    <li>
                        <Link classNameName="nav-link scrollto active" to="/">Home</Link>
                    </li>

                    <li>
                        <Link className="nav-link scrollto" to={ABOUT_US_PAGE}>About</Link>
                    </li>

                    <li>
                        <Link classNameName="nav-link scrollto" to={CONTANCT_US_PAGE}>Contact Us</Link>
                    </li>

                    <li className="dropdown"><a href="#"><span> Product</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                            <li> <Link classNameName="dropdown-item" to={SALES_CLOUD_PAGE}>Sales</Link></li>
                            <li><Link classNameName="dropdown-item" to={SERVICE_CLOUD_PAGE}>Service Cloud</Link></li>
                            <li><Link classNameName="dropdown-item" to={HEROKU_PAGE}>Heroku</Link></li>
                            <li><Link classNameName="dropdown-item" to={CPQL_PAGE}>Cpql</Link></li>
                        </ul>
                    </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <Routes>
                <Route path={ABOUT_US_PAGE} element={<AboutUs />}></Route>
                
                <Route path={SALES_CLOUD_PAGE} element={<Sales />}></Route>
                <Route path={SERVICE_CLOUD_PAGE} element={<ServiceCloud />}></Route>
                <Route path={CPQL_PAGE} element={<Cpql />}></Route>
                <Route path={HEROKU_PAGE} element={<Heroq />}></Route>
            </Routes>
        </div>

    );
}

export default Menus;
