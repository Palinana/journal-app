import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/auth';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newClient = this.state;
        this.props.login(newClient,this.props.history);
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const error = this.props.error;

        return (
            <div className="wrapper">
                <div className="row">
                    <div className="form__container">
                        <div className="form-screen">
                            <div className="form__container-header">
                                <h1 className="heading-primary--main">Journal</h1>
                            </div>

                            <form onSubmit={this.onSubmit} className="form__container-body">
                                <div className="control-group">
                                    <input type="text" className="login-field"  name="username" value={this.state.username} onChange={this.onChange} placeholder="username" id="login-name"/>
                                </div>

                                <div className="control-group">
                                    <input type="password" className="login-field" name="password" onChange={this.onChange} value={this.state.password} placeholder="password" id="login-pass"/>
                                </div>

                                <input type="submit" value="Login" className="btn btn-primary btn-large btn-block"/>
                                {error && error.response && <div className="error"> {error.response.data} </div>}

                                <Link to={'/register'} className="login-link">New User? Register Now!</Link>
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
        error: state.auth.error
    }
}

export default connect(mapState, { login })(Login);