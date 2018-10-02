import axios from 'axios';

//ACTION TYPES
const GET_USER = 'GET_USER';
const GET_USERS = 'GET_USERS';
const ADD_USER = 'ADD_USER';

//ACTION CREATORS
const getUsers = users => ({type: GET_USERS, users});

const getUser = user => ({type: GET_USER, user});

const addUser = newUser => ({type: ADD_USER, newUser});

//THUNK CREATORS
export const fetchUsers= () => {
    return dispatch => {
      axios.get('/api/users')
        .then(res => res.data)
        .then(users => {
            dispatch(getUsers(users))
        })
        .catch(console.error);
    }
}

export const fetchUser = (id) => {
    return dispatch => {
      axios.get(`/api/users/${id}`)
        .then(res => res.data)
        .then(user => {
          dispatch(getUser(user))
        })
        .catch(console.error)
    }
}  

export const postUser = (newUser, history) => {
    return dispatch => {
      axios.post('/api/users', newUser)
        .then(res => res.data)
        .then(user => {
          dispatch(addUser(user))
          history.push('/users') 
        })
        .catch(console.error)
    }
} 

//REDUCER
export default function (state = [], action) {
    switch (action.type) {
        case GET_USERS:
            return action.users
        case GET_USER:
            return action.user
        case ADD_USER:
            return [...state, action.newUser];
        default:
            return state
    }
}