import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with Google</a>
                    </li>
                );
            default:
                return (
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a
                        className="btn-floating btn-large waves-effect waves-light red"
                        onClick={this.props.toggleSideNav}
                    >
                        <i className="material-icons">menu</i>
                    </a>
                    <Link
                        to={this.props.auth ? '/dashboard' : '/'}
                        className="left brand-logo"
                        style={{ marginLeft: 200 }}
                    >
                        LSS.ai
                    </Link>
                    <ul className="right">{this.renderContent()}</ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
