import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEntry } from '../store/entry';

class UserEntry extends Component {

    componentDidMount(){
        const userId = this.props.match.params.userId;
        const entryId = this.props.match.params.entryId;
        this.props.getEntry(userId, entryId);
    }
    
    render() {

        const userId = this.props.match.params.userId;
        const entry = this.props.entries

        return (
        <div className="wrapper">
            <div className="row">
                <div className="dashboard">
                    <div className="container__content">
                        <div className="container__content-left">
                            <h2 className="btn-back">
                                <Link to={`/users/${userId}/entries`} className="btn-back-link">&larr; Back to All Entries</Link>
                            </h2>
                        </div>

                        <div className="container__content-right">
                            <Link to={`/users/${userId}/entries`} className="btn-orange"></Link>
                        </div>
                    </div>

                    <div className="heading-text padding-text">
                        <h2 className="heading-primary">{entry.name}</h2>
                        <div className="container__text">
                            <p className="text">{entry.description}</p>
                        </div>
                        
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
        getEntry: (userId, entryId) => {
            dispatch(fetchEntry(userId, entryId));
        }
    }
}

export default connect(mapState, mapDispatch)(UserEntry);