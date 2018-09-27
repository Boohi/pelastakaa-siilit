import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './SideNavigation.css';



class SideNavigation extends Component {
    componentDidMount() {}
    componentWillUnmount() {}

    render() {
        return (
            <div className="sideNavigation" style={this.props.style}>

                        <Link to="/dashboard">
                            Home
                            <i className="material-icons right medium">home</i>
                        </Link>
                        <Link to="/dashboard/myProcesses">
                            My Processes
                            <i className="material-icons right medium">input</i>
                        </Link>
                        <Link to="/dashboard/processLibrary">
                            Process Library
                            <i className="material-icons right medium">library_books</i>
                        </Link>

            </div>
        );
    }
}

export default SideNavigation;
