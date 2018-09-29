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
                <Link to="/dashboard/myProcesses">
                    Processes
                    <i className="material-icons right small">input</i>
                </Link>
                <Link to="/dashboard/processLibrary">
                    Library
                    <i className="material-icons right small">library_books</i>
                </Link>
            </div>
        );
    }
}

export default SideNavigation;
