import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './Dashboard.css';
import MyProcesses from './MyProcesses';
import Home from './Home';
import ProcessLibrary from './ProcessLibrary';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="dashboard" style={this.props.style}>
                <div>
                    <Route exact path="/dashboard" component={Home} />
                    <Route exact path="/dashboard/myProcesses" component={MyProcesses} />
                    <Route exact path="/dashboard/processLibrary" component={ProcessLibrary} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
