import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../store/auth';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newClient = this.state;
        this.props.register(newClient,this.props.history);
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        return (
        <div className="wrapper">
            <div className="wrapper-header">
                <h2 className="btn-back"></h2>
            </div>
            <div className="row">
                <div className="form__container">
                    <div className="form__container-header">
                        <h2 className="heading-secondary">Register</h2>
                    </div>

                    <div className="form__container-header">
                        <h2 className="heading-tertiary">
                            <Link to={'/login'}>Existing User? Login!</Link>
                        </h2>
                    </div>
                    <div className="form__container-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="username"
                                    placeholder="Username"
                                    required
                                    onChange={this.onChange}
                                    value={this.state.username}
                                />
                            </div>

                            <div className="form__group">
                                <input type="submit" value="Register" className="btn-add" id="main-btn"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapState = state => {
    return {
        username: state.user.username,
        userId: state.user.id,
    }
}

export default connect(mapState, { register })(Register);