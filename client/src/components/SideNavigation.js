import React, { Component, RootComponent } from 'react';
//import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
//import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Home from './Home';
import 'w3-css/w3.css';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class SideNavigation extends Component {
    constructor(props) {
        super(props);

        this.sideNavigation = React.createRef();
        this.openNav = React.createRef();

    }

    render() {
        return (
            <div>
                <div
                    className="w3-sidebar w3-bar-block w3-card w3-animate-left"
                    style={{ display: 'none' }}
                    ref={this.sideNavigation}
                >
                    <button className="w3-bar-item w3-button w3-large" ref={this.openNav} onClick={this.w3_close.bind(this)}>
                        Close ×
                    </button>
                    <a href="#" className="w3-bar-item w3-button">
                        Link 1
                    </a>
                    <a href="#" className="w3-bar-item w3-button">
                        Link 2
                    </a>
                    <a href="#" className="w3-bar-item w3-button">
                        Link 3
                    </a>
                </div>
                <div className="w3-teal">
                    <button onClick={this.w3_open.bind(this)} className="w3-button w3-teal w3-xlarge">
                        ☰
                    </button>
                    <div className="w3-container">
                        <h1>My Page</h1>
                    </div>
                </div>
            </div>
        );
    }

    w3_open() {
        const sideNavigation= this.sideNavigation.current;
        const openNav = this.openNav.current;
        sideNavigation.style.display = 'block';
        sideNavigation.style.width = '10%';
        openNav.style.display = 'none';

       // document.getElementById('main').style.marginLeft = '25%';
    }
    w3_close() {
        const sideNavigation= this.sideNavigation.current;
        const openNav = this.openNav.current;
        sideNavigation.style.display = 'none';
        openNav.style.display = 'inline-block';
      //  document.getElementById('main').style.marginLeft = '0%';
    }
}

export default SideNavigation;
