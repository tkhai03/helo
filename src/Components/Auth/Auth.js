import React, {Component} from 'react'
import axios from 'axios'
// import './Auth.css'
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/reducer'

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleRegister = () => {
        const { username, password, profile_pic} = this.state
        axios
            .post('./auth/register', {username, password, profile_pic})
            .then((res) => {
                this.props.loginUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    handleLogin = (e) => {
        const { username, password } = this.state

        axios
            .post('./auth/login', { username, password })
            .then((res) => {
                this.props.loginUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch((err) => {
                alert(err.message)
            })
    }


    render(){
        return(
            <div className="whole-view">
                <div className="auth-box">
                    <header className="header">Helo</header>
                    <div className="input-box">
                        <p>Username:</p>
                        <input placeholder="Enter Username" name="username" text="text" value={this.state.username} onChange={(e) => {this.handleInput(e)}}/>
                        <p>Password:</p>
                        <input placeholder="Enter Password" name="password" text="text" value={this.state.password} onChange={(e) => {this.handleInput(e)}}/>
                    </div>
                    <div className="button-container">
                    <button className="auth-button" onClick={ () => {this.handleLogin()} }>Log In</button>
                    <button className="auth-button" onClick={ () => {this.handleRegister()} } to="/register">Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {loginUser})(Auth)