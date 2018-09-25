import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideNavigation from './SideNavigation';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <SideNavigation />
                Dashboard
            </div>
        );
    }
}

export default Dashboard;
