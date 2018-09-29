import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Dashboard.css';
import MyProcesses from './MyProcesses';
import Home from './Home';
import ProcessForm from './myProcesses/ProcessForm';
import ProcessLibrary from './ProcessLibrary';
import Project from './Projects';
import ProjectForm from './myProjects/ProjectForm';


import Process from './myProcesses/process/Process';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard" style={this.props.style}>
                <div>
                    <Route exact path="/dashboard" component={Home} />
                    <Route exact path="/dashboard/my_processes" component={MyProcesses} />
                    <Route
                        exact
                        path="/dashboard/my_processes/add_process"
                        component={ProcessForm}
                    />
                    <Route
                        exact
                        path="/dashboard/processLibrary"
                        component={ProcessLibrary}
                    />
                    <Route exact path="/dashboard/my_processes/process" component={Process} />
                    <Route exact path="/dashboard/projects" component={Project} />
                    <Route
                        exact
                        path="/dashboard/my_processes/add_project"
                        component={ProjectForm}
                    />
                </div>
            </div>
        );
    }
}

export default Dashboard;
