import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Core from './core/Core';

import Landing from './landing/Landing';
import Header from './core/navigation/Header';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Core} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(App);
