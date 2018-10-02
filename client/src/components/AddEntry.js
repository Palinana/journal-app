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
                    <h2 className="btn-back">
                        <Link to={`/users/${userId}/entries`} className="btn-back-link">&larr; Go Back</Link>
                    </h2>
                </div>


                <div className="row">
                    <div className="form__container">
                        <div className="form__container-header">
                            <h2 className="heading-secondary"> Add New Entry</h2>
                        </div>
                        <div className="form__container-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstName">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="name"
                                        placeholder="Name"
                                        required
                                        onChange={this.onChange}
                                        value={this.state.name}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="firstName">Description</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="description"
                                        placeholder="Description"
                                        required
                                        onChange={this.onChange}
                                        value={this.state.description}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Submit" className="btn-add" id="main-btn"/>
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