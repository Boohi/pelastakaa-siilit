import React, { Component } from 'react';

class MyProcesses extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleClick() {
        this.setState(prev => {
            return {
                visibility: !prev.visibility
            };
        });
    }
    render() {
        return (
            <div>
                MyProcesses
                <div>MyProcesses</div>
                <a className="btn-floating-red" onClick={this.handleClick}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </a>
                {this.state.visibility && (
                    <div class="col s12 m7">
                        <div class="card horizontal">
                            <div class="card-content">
                                <p>
                                    I am a very simple card. I am good at containing small bits of
                                    information.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default MyProcesses;
