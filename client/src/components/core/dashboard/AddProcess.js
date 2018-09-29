import React, { Component } from 'react';

class AddProcess extends Component {
    constructor(props) {
        super(props);
        this.addProcessCard = this.addProcessCard.bind(this);
        this.state = {
            error: undefined
        };
    }
    addProcessCard(e) {
        e.preventDefault();
        const process = e.target.elements.process.value.trim();
        const error = this.props.addProcessCard(process);
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.process.value = '';
        }
    }
    render() {
        console.log('rendering');
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addProcessCard}>
                    <input type="text" name="process" />
                    <div className="fixed-action-btn">
                        <button to="/surveys/new" className="btn-floating btn-large red">
                            <i className="material-icons">add</i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProcess;
