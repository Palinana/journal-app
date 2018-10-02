import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEntries } from '../store/entry';
import { fetchUser } from '../store/user';

class UserEntries extends Component {
    constructor(props) {
        super(props);
    }

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
                                <h2 className="btn-back">
                                    Hello, { userName }
                                </h2>
                            </div>

                            <div className="container__content-right">
                                <Link to={`/users/${userId}/entries/add`} className="btn-orange margin-text">Add Entry</Link>
                                <Link to={`/login`} className="btn-orange">Logout</Link>
                            </div>
                        </div>

                        <div className="heading-text">
                            <h2 className="heading-primary">All Entries:</h2>
                        </div>

                        <div className="heading-text padding-box">
                            { entries.length ? entries.map(entry => {
                                return (   
                                    <div className="container__content container__content-box" key={entry.id}>
                                        <div className="container__content-date">
                                            <ul>
                                                <li className="color-secondary">{entry.createdAt.slice(8,10)}</li>
                                                <li className="color-primary">{this.getMonthDays(entry.createdAt.slice(5,7))}</li>
                                                <li className="color-tertiary">{entry.createdAt.slice(0,4)}</li>
                                            </ul>
                                        </div>
                                        <div className="container__content-entry">
                                            <Link to={`/users/${userId}/entries/${entry.id}`} className="card-link"> <h2 className="entry-name">{entry.name}</h2></Link>
                                            <p className="entry-description">{entry.description}</p>
                                        </div>
                                    </div>
                                )
                            }) : <h1 className="heading-secondary">You have no entries</h1> }
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