import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from './myProjects/ProjectList';

class MyProcesses extends Component {
    render() {
        return (
            <div>
                <ProjectList />
                <div className="fixed-action-btn">
                    <Link
                        to="/dashboard/my_processes/add_project"
                        className="btn-floating btn-large red"
                    >
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default MyProcesses;
