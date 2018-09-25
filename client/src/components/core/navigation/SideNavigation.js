import React, { Component } from 'react';
import './SideNavigation.css';

class SideNavigation extends Component {
    render() {
        return (
            <div className="sideNavigation">
                <a href="#">Home</a>
                <a href="#">My Processes</a>
                <a href="#">Process Library</a>
            </div>
        );
    }
}

export default SideNavigation;
