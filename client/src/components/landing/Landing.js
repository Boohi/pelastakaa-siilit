import React from 'react';
import './Landing.css';

const Landing = () => {
    return (
        <div className="landingpage">
            <div className="card horizontal landingcard">
                <div className="card ">
                    <div className="card-content">
                        <p>Welcome to lss.ai - world's best improvement tool.</p>
                    </div>
                    <div className="card-action">
                        <a href="/auth/google">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
