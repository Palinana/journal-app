import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postEntry } from '../store/entry';

class AddEntry extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userId = this.props.match.params.userId;
        const newEntry = this.state;
        this.props.postEntry(userId, newEntry);

        this.props.history.push(`/users/${userId}/entries`); 
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        const userId = this.props.match.params.userId;

        return (
            <div className="wrapper">
                <div className="wrapper-header">
                    <h2 className="btn-header">
                        <Link to={`/users/${userId}/entries`} className="btn-back-link">&larr; Go Back</Link>
                    </h2>
                </div>

                <div className="row">
                    <div className="form__container">
                        <div className="form-screen">
                            <div className="form__container-header">
                                <h2 className="heading-primary--main"> Add New Entry</h2>
                            </div>
                            <form className="form__container-body" onSubmit={this.onSubmit}>
                                <div className="control-group">
                                    <input type="text" className="login-field"  name="name" value={this.state.name} onChange={this.onChange} placeholder="name" id="login-name" required/>
                                </div>

                                <div className="control-group">
                                    <textarea type="text" className="login-field"  name="description" value={this.state.description} onChange={this.onChange} placeholder="description" id="login-name" required/>
                                </div>

                                <div className="control-group">
                                    <input type="submit" value="Submit" className="btn btn-primary btn-large btn-block" id="main-btn"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { postEntry })(AddEntry);