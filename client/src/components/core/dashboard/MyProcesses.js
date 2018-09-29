import React, { Component } from 'react';
import ProcessList from './myProcesses/ProcessList';
import ProcessForm from './myProcesses/ProcessForm';

class MyProcesses extends Component {
    render() {
        return (
            <div>
                MyProcesses
                <div>MyProcesses</div>
                <ProcessList />
                <ProcessForm />
            </div>
        );
    }
}

export default MyProcesses;
