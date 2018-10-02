import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/user';

class AllUsers extends Component {

    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="dashboard">
                        <div className="container__header">
                            <Link to={'/users/add'} className="btn-orange">Add New User</Link>
                        </div> 
                        <div className="heading-text">
                            <h2 className="heading-primary">All Users:</h2>
                        </div>

                        { this.props.username.map(user => {
                            return (
                                <div className="container__content" key={user.id}>
                                    <div className="container__content-left">
                                        <h4>{' '}<span className="text-secondary">{user.username}</span></h4>
                                    </div>
                                    <div className="container__content-right">
                                        <Link to={`/users/${user.id}/entries`} className="card-link">Go to Journal</Link>
                                    </div>
                                </div>        
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = state => {
    return {
        username: state.user,
        userId: state.user.id
    }
}

const mapDispatch = dispatch => {
    return {
        getUsers: () => {
            dispatch(fetchUsers());
        }
    }
}

export default connect(mapState, mapDispatch)(AllUsers);