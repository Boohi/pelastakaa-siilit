import React, { Component } from 'react';
import './Flow.css';
import MxGraphGridAreaEditor from './MxGraphGridAreaEditor';

class Flow extends Component {
    render() {
        return (
            <div className="flow-container">
                <MxGraphGridAreaEditor />
            </div>
        );
    }
}

export default Flow;
