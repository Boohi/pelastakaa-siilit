import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideNavigation.css';

class SideNavigation extends Component {
    render() {
        return (
            <div className="sideNavigation" style={this.props.style}>
                <Link to="/dashboard">
                    Home
                    <i className="material-icons right small">home</i>
                </Link>
                <Link to="/dashboard/my_processes">
                    Processes
                    <i className="material-icons right small">graphic_eq</i>
                </Link>
                <Link to="/dashboard/processLibrary">
                    Library
                    <i className="material-icons right small">storage</i>
                </Link>
                <Link to="/dashboard/projects">
                    Projects
                    <i className="material-icons right small">show_chart</i>
                </Link>
            </div>
        );
    }
}

export default SideNavigation;
