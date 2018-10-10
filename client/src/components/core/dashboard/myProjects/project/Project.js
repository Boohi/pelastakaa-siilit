import React, { Component } from 'react';
import './Project.css';
import axios from 'axios';

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = { id: this.props.location.state.id };
    }

    async componentDidMount() {
        const res = await axios.post('/api/projects', { id: this.state.id });
        const members = res.data.users.map(user => {
            return (
                <li key={user._id}>
                    <img src={user.image} className="google-profile-picture-2" alt="" />
                    {user.firstName}
                </li>
            );
        });
        this.setState({
            name: res.data.project.name,
            description: res.data.project.description,
            members: members
        });
    }

    render() {
        return (
            <div className="project-container">
                <h1>{this.state.name}</h1>
                <h3>{this.state.description}</h3>
                <div className="project-info">
                    <div className="project-members">
                        <h5>Members</h5>
                        <p>{this.state.members}</p>
                    </div>
                    <div className="project-definition">
                        <h5>Definition</h5>
                    </div>
                    <div className="project-process">
                        <h5>Process</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
