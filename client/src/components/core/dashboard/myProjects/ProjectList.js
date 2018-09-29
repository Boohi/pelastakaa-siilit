import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import axios from 'axios';

class ProjectList extends Component {
    constructor(props) {
        super(props);

        this.state = { projects: [] };
    }

    setStateAsync(state) {
        return new Promise(resolve => {
            this.setState(state, resolve);
        });
    }

    async componentWillMount() {
        const res = await axios.get('/api/projects');

        await this.setStateAsync({ projects: res });
    }

    renderProjects() {
        if (!this.state.projects.data) return null;
        return this.state.projects.data.map(project => {
            return (
                <ProjectItem
                    key={project._id}
                    id={project._id}
                    name={project.name}
                    description={project.description}
                    company={project.company}
                />
            );
        });
    }

    render() {
        return <div>{this.renderProjects()}</div>;
    }
}

export default ProjectList;
