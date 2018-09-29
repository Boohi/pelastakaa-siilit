import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProcessItem extends Component {
    componentDidMount() {
        console.log(this.props.id);
    }
    render() {
        return (
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{this.props.name}</span>
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                        <div className="card-action">
                            <Link to="/dashboard/my_processes/process">{this.props.company}</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProcessItem;
