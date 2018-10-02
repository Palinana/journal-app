import axios from 'axios';
import history from '../history';

//ACTION TYPES
const LOGIN_USER = 'LOGIN_USER';
const REGISTER_USER = 'REGISTER_USER';

//ACTION CREATORS
const loginUser = user => ({type: LOGIN_USER, user});

const registerUser = newUser => ({type: REGISTER_USER, newUser});

//THUNK CREATORS
export const login = (user) => {
    return dispatch => {
      axios.post('/api/login', user)
        .then(res => res.data)
        .then(user => {
            dispatch(loginUser(user))
            history.push(`/users/${user.id}/entries`)
        },  authError => { 
            dispatch(loginUser({error: authError}))
        })  
        .catch(console.error);
    }
}

export const register = (newUser) => {
    return dispatch => {
      axios.post('/api/register', newUser)
        .then(res => res.data)
        .then(user => {
          dispatch(registerUser(user))
          history.push(`/users/${user.id}/entries`)
        })  
        .catch(console.error)
    }
}  

//REDUCER
export default function (state = [], action) {
    switch (action.type) {
        case LOGIN_USER:
            return action.user
        case REGISTER_USER:
            return action.newUser
        default:
            return state
    }
}