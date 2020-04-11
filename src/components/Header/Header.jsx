import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import "./Header.css";
import About from "./About";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Home from "./Home";




const Header = () => (
<HashRouter>
    <div className="header">
        <div className="header-bar">
            <h2 className="nav-head"><NavLink to="/" id="a-link">Kartik Bhartiya</NavLink></h2>
            <h3 className="nav-link"><NavLink to="/about" id="a-link">About</NavLink></h3>
            <h3 className="nav-link"><NavLink to="/projects" id="a-link">Projects</NavLink></h3>
            <h3 className="nav-link"><NavLink to="/blogs" id="a-link">Blogs</NavLink></h3>
            <h3 className="nav-link"><NavLink to="/contactme" id="a-link">Contact</NavLink></h3>
            <label className="switch" onClick="changeTheme()" >
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
        
    </div>
    <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/blogs" component={Blogs}/>
        <Route path="/contactme" component={Contact}/>
    </div>
</HashRouter>    
);



export default Header;