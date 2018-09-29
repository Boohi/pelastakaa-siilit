import React, { Component } from 'react';
import Flow from './flow/Flow';
import Analytics from './analytics/Analytics';
import SplitPane from 'react-split-pane';
import './Process.css';

class Process extends Component {
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
