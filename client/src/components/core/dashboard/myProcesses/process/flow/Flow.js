import React, { Component } from 'react';
import './Flow.css';
import DiagramTool from './Diagram/DiagramTool';

class Flow extends Component {
    render() {
        return (
            <div className="flow-container">
                <DiagramTool />
            </div>
        );
    }
}

export default Flow;
