import React, { Component } from 'react';
import './Project.css';
import axios from 'axios';

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = { id: this.props.location.state.id };
    }
    async componentDidMount() {
        const res = await axios.post('/api/project', { id: this.state.id });

        this.setState({ name: res.data.name });
    }
    render() {
        return <div>Projekti testi</div>;
    }
}

export default Project;
