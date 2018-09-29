import React, { Component } from 'react';
import axios from 'axios';

class ProcessForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            company: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }

    handleSubmit(event) {
        axios.post('/api/submit_process', this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Process:
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <textarea
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                    />
                    <input
                        type="text"
                        name="company"
                        onChange={this.handleChange}
                        value={this.state.company}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ProcessForm;
