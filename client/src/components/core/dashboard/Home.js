import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div>My feed:</div>
                <div className="row">
                    <div className="col s6 s7">
                        <div className="card small">
                            <div className="card-image">
                                <img alt="sample" src="images/sample-1.jpg" />
                                <span className="card-title">Siili</span>
                            </div>
                            <div className="card-content">
                                <p>Customer reactions after boosting their processes.</p>
                            </div>
                            <div className="card-action">
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
