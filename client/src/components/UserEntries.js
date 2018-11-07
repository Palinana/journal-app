import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEntries } from '../store/entry';
import { fetchUser } from '../store/user';

class UserEntries extends Component {

    componentDidMount(){
        const userId = this.props.match.params.userId;
        this.props.getEntries(userId);
        this.props.getUser(userId);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    getMonthDays(number) {
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let month = months[number-1];
        return month;
    }
    
    render() {
        const userId = this.props.match.params.userId;
        const userName = this.props.username;

        const entries = this.props.entries

        return (
            <div className="wrapper">
                <div className="row">
                    <div className="dashboard">
                        <div className="container__content">
                            <div className="container__content-left">
                                <h2 className="container__content-user">
                                    Hello, <span className="user-name">{ userName }</span>
                                </h2>
                            </div>

                            <div className="container__content-right">
                                <Link to={`/users/${userId}/entries/add`} className="btn-header margin-text">Add Entry</Link>
                                <Link to={`/`} className="btn-header">Logout</Link>
                            </div>
                        </div>

                        <div className="container__heading-text">
                            <h2 className="container__heading-primary">All Entries:</h2>
                        </div>

                        <div className="container__padding-box">
                            { entries.length ? entries.map(entry => {
                                return (   
                                    <div className="container__entry-box" key={entry.id}>
                                        <div className="container__entry-date">
                                            <h2>
                                                <span className="color-secondary">{entry.createdAt.slice(8,10)}</span>
                                                <span className="color-primary">{this.getMonthDays(entry.createdAt.slice(5,7))}</span>
                                                <span className="color-tertiary">{entry.createdAt.slice(0,4)}</span>
                                            </h2>
                                        </div>
                                        <div className="container__entry-text">
                                            <Link to={`/users/${userId}/entries/${entry.id}`}><h2 className="entry-name">{entry.name}</h2></Link>
                                            <p className="entry-description">{entry.description}</p>
                                        </div>
                                    </div>
                                )
                            }) : <h1 className="container__heading-secondary">You have no entries</h1> }
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
        entries: state.entry
    }
}

const mapDispatch = dispatch => {
    return {
        getEntries: (id) => {
            dispatch(fetchEntries(id));
        },
        getUser: (id) => {
            dispatch(fetchUser(id));
        }

    }
}

export default connect(mapState, mapDispatch)(UserEntries);