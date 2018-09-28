import React, { Component } from 'react';
import AddProcess from './AddProcess';

class MyProcesses extends Component {
    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.addProcessCard = this.addProcessCard.bind(this);
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
            console.log('updated');
            console.log(this.state.processes.length);
        }
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
        console.log('added');
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
                    <div>
                        {this.state.processes.length == 0 && (
                            <p>Please add a process to get started.</p>
                        )}
                        {this.state.processes.map(process => (
                            <Process key={process} processText={process} />
                        ))}
                    </div>
                    <AddProcess addProcessCard={this.addProcessCard} />
                </div>
            </div>
        );
    }
}

//<ProcessesList processes={this.props.processes} />

const ProcessesList = props => {
    return (
        <div>
            {props.processes.length == 0 && <p>Please add a process to get started.</p>}
            {props.processes.map(process => (
                <AddProcess key={process} processText={process} />
            ))}
        </div>
    );
};

const Process = props => {
    return (
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">{props.processText}</span>
                    </div>
                    <div class="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProcesses;
