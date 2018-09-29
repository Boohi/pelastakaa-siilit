import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProcessList from './myProcesses/ProcessList';

class MyProcesses extends Component {
    render() {
        return (
            <div>
                <ProcessList />
                <div className="fixed-action-btn">
                    <Link to="/dashboard/my_processes/add_process" className="btn-floating btn-large red">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default MyProcesses;
