import React, { Component } from 'react';
import ProcessItem from './ProcessItem';
import axios from 'axios';

class ProcessList extends Component {
    constructor(props) {
        super(props);

        this.state = { processes: [] };
    }

    setStateAsync(state) {
        return new Promise(resolve => {
            this.setState(state, resolve);
        });
    }

    async componentDidMount() {
        const res = await axios.get('/api/processes');

        await this.setStateAsync({ processes: res });
    }

    renderProcesses() {
        if (!this.state.processes.data) return null;
        return this.state.processes.data.map(process => {
            return (
                <ProcessItem
                    key={process._id}
                    id={process._id}
                    name={process.name}
                    description={process.description}
                    company={process.company}
                />
            );
        });
    }

    render() {
        return <div>{this.renderProcesses()}</div>;
    }
}

export default ProcessList;
