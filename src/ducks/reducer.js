// import axios from 'axios'

const initialState = {
    username: '',
    id: 0,
    profile_pic: ''
}

//Action Constants
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'


//Actions
//payload = what is passed into the function
export function loginUser(username, id){
    return{
        type: LOGIN_USER,
        payload: {
            username: username,
            id: id,
        }
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: null
    }
}

//Reducer
export default function (state = initialState, action) {
    switch(action.type){
        case LOGIN_USER:
            const {username, id, profile_pic} = action.payload.username
            return {username, id, profile_pic}
            // return {...state, username: action.payload, id:}
        case LOGOUT_USER:
            return initialState
        case GET_USER + '_PENDING':
            return {...state}
        case GET_USER + '_FULFILLED':
            return {username, id, profile_pic}
        case GET_USER + '_REJECTED':
            return initialState
        default:
                return initialState


    }
}