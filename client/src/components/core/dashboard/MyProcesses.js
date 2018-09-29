import React, { Component } from 'react';
import AddProcess from './AddProcess';

class MyProcesses extends Component {
    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.addProcessCard = this.addProcessCard.bind(this);
        this.deleteProcesses = this.deleteProcesses.bind(this);
        this.deleteSingleProcess = this.deleteSingleProcess.bind(this);
        this.state = {
            visibility: false,
            processes: []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('processes');
            const processes = JSON.parse(json);

            if (processes) {
                this.setState(() => ({ processes }));
            }
        } catch (e) {}
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.processes.length !== this.state.processes.length) {
            const json = JSON.stringify(this.state.processes);
            localStorage.setItem('processes', json);
        }
    }

    componentWillUnmount() {
        console.log('component unmount');
    }

    handleVisibility() {
        this.setState(prev => {
            return {
                visibility: !prev.visibility
            };
        });
    }

    addProcessCard(name) {
        if (!name) {
            return 'Enter valid name for new process!';
        } else if (this.state.processes.indexOf(name) > -1) {
            return 'This process already exists!';
        }
        this.setState(prev => ({ processes: prev.processes.concat(name) }));
    }

    deleteProcesses() {
        this.setState(() => ({ processes: [] }));
    }

    deleteSingleProcess(processRemove) {
        this.setState(prev => ({
            options: prev.processes.filter(process => {
                return processRemove !== process;
            })
        }));
    }

    render() {
        return (
            <div>
                MyProcesses
                <div>MyProcesses</div>
                <a className="btn-floating-red" onClick={this.handleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </a>
                {this.state.visibility && (
                    <div className="col s12 m7">
                        <div className="card horizontal">
                            <div className="card-content">
                                <p>
                                    I am a very simple card. I am good at containing small bits of
                                    information.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    <Processes
                        processes={this.state.processes}
                        deleteSingleProcess={this.deleteSingleProcess}
                        deleteProcesses={this.deleteProcesses}
                    />
                    <AddProcess addProcessCard={this.addProcessCard} />
                </div>
            </div>
        );
    }
}

const Processes = props => {
    return (
        <div>
            <button onClick={props.deleteProcesses}>Remove All</button>
            {props.processes.length == 0 && <p>Please add a process to get started.</p>}
            {props.processes.map(process => (
                <Process
                    key={process}
                    processText={process}
                    deleteSingleProcess={props.deleteSingleProcess}
                />
            ))}
        </div>
    );
};

const Process = props => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{props.processText}</span>
                        <button
                            onClick={e => {
                                props.deleteSingleProcess(props.processText);
                                console.log('down in Process, not yet fully functional');
                            }}
                        >
                            remove (WIP)
                        </button>
                        <a className="card-action" href="#">
                            Link to the process
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProcesses;
