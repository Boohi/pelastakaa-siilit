import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                Home
                <div>Home</div>
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card blue lighten-1">
                            <div class="card-content black-text">
                                <span class="card-title">There are no new alerts.</span>
                                <p>
                                    You are currently following this and that process. There are no
                                    new alerts!
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="/dashboard/myProcesses">View My Processes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
