import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './navigation/Header';
import SideNavigation from './navigation/SideNavigation';
import Dashboard from './dashboard/Dashboard';
import './Core.css';

class Core extends Component {
    constructor(props) {
        super(props);
        this.state = { showSideNav: true, sideNavStyle: {}, dashBoardStyle: {} };
    }

    toggleSideNav = () => {
        let sideNavStyle = '';
        let dashBoardStyle = '';
        this.setState((state, props) => {
            if (this.state.showSideNav) {
                sideNavStyle = 'translateX(-75%)';
                dashBoardStyle = 'translateX(-11%)';
            } else {
                sideNavStyle = 'translateX(0%)';
            }
            return {
                showSideNav: !state.showSideNav,
                sideNavStyle: {
                    transform: sideNavStyle
                },
                dashBoardStyle: {
                    transform: dashBoardStyle
                }
            };
        });
    };

    render() {
        return (
            <div>
                <Header toggleSideNav={this.toggleSideNav}/>
                <SideNavigation
                    toggleSideNav={this.toggleSideNav}
                    style={this.state.sideNavStyle}
                />
                <Dashboard style={this.state.dashBoardStyle}/>
            </div>
        );
    }
}

export default Core;
