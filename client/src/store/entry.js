import axios from 'axios';

//ACTION TYPES
const GET_ENTRY = 'GET_ENTRY';
const GET_ENTRIES = 'GET_ENTRIES';
const ADD_ENTRY = 'ADD_ENTRY';

//ACTION CREATORS
const getEntries = entries => {
    return {
      type: GET_ENTRIES,
      entries
    }
}

const getEntry = entry => {
    return {
      type: GET_ENTRY,
      entry
    }
}

const addEntry = newEntry => {
    return {
        type: ADD_ENTRY,
        newEntry
    }
}

//THUNKS
export const fetchEntries = (userId) => {
    return dispatch => {
        axios.get(`/api/users/${userId}/entries`)    
            .then(res => res.data)
            .then(entries => dispatch(getEntries(entries)))
            .catch(err => console.error(err))
    }
}

export const fetchEntry = (userId, entryId) => {
    return dispatch => {
        axios.get(`/api/users/${userId}/entries/${entryId}`)
            .then(res => res.data)
            .then(entry => dispatch(getEntry(entry)))
            .catch(err => console.error(err))
    }
}

export const postEntry = (userId, newEntry) => {
    return (dispatch) => {
      axios.post(`/api/users/${userId}/entries`, newEntry) 
            .then(res => res.data)
            .then(created => dispatch(addEntry(created)))
            .catch(err => console.error(err))
    }
}

//REDUCER
export default function (state = [], action) {
    switch (action.type) {
        case GET_ENTRIES:
            return action.entries
        case GET_ENTRY:
            return action.entry
        case ADD_ENTRY:
            return [...state, action.newEntry];
        default:
            return state
    }
}  