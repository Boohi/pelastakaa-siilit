import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div>My feed:</div>
                <div class="row">
                    <div class="col s6 s7">
                        <div class="card small">
                            <div class="card-image">
                                <img src="images/sample-1.jpg" />
                                <span class="card-title">Siili</span>
                            </div>
                            <div class="card-content">
                                <p>Customer reactions after boosting their processes.</p>
                            </div>
                            <div class="card-action">
                                <a href="https://www.youtube.com/watch?v=mHlJpJhyBgI">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
