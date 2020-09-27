import axios from 'axios'

const initialState = {
    username: {},
    id: 0,
    profile_pic: ''
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'

export function loginUser(username){
    return{
        type: LOGIN_USER,
        payload: username
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: null
    }
}

export default function(state = initialState, action) {
    switch(action.type){}
}