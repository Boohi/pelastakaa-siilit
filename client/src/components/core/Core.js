import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './navigation/Header';
import SideNavigation from './navigation/SideNavigation';
import Dashboard from './dashboard/Dashboard';
import './Core.css';

class Core extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <SideNavigation></SideNavigation>
                <Dashboard></Dashboard>
            </div>
        );
    }
}

export default Core;
