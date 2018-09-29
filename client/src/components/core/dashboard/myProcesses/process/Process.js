import React, { Component } from 'react';
import Flow from './flow/Flow';
import Analytics from './analytics/Analytics';
import SplitPane from 'react-split-pane';
import './Process.css';
import axios from 'axios';

class Process extends Component {
    constructor(props) {
        super(props);

        this.state = {id: this.props.location.state.id}
    }
    async componentWillMount() {
        const res = await axios.post('/api/process', {id: this.state.id} );

        this.setState({name: res.data.name});
        console.log(this.state);
    }
    render() {
        
        return (
            <div className="process">
                <SplitPane split="horizontal" minSize={300} defaultSize={300}>
                    <Flow />
                    <Analytics />
                </SplitPane>
            </div>
        );
    }
}

export default Process;
