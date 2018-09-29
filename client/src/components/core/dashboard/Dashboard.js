import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Dashboard.css';
import MyProcesses from './MyProcesses';
import Home from './Home';
import ProcessForm from './myProcesses/ProcessForm';

import Process from './process/Process';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard" style={this.props.style}>
                <div>
                    <Route exact path="/dashboard" component={Home} />
                    <Route exact path="/dashboard/myProcesses" component={MyProcesses} />
                    <Route
                        exact
                        path="/dashboard/myProcesses/add_process"
                        component={ProcessForm}
                    />
                    <Route exact path="/dashboard/processLibrary" component={Process} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
