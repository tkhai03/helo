import React, {Component} from 'react'
import axios from 'axios'

class Auth extends Component {
    constructor(){
        super()
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
        const { username, password} = this.state

        axios
            .post('./api/auth/register', {username, password})
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
            .post('./api/auth/login', { username, password })
            .then((res) => {
                this.props.loginUser(res.data)
                this.props.history.push('/dashboard')
            })
    }


    render(){
        return(
            <div>
                <div>
                    <input placeholder="Enter Username" name="username" onChange={(e) => {this.handleInput(e)}}/>
                    <input placeholder="Enter Password" name="password" onChange={(e) => {this.handleInput(e)}}/>
                </div>
                <button onClick={ () => {this.handleLogin()} }>Log In</button>
                <button onClick={ () => {this.handleRegister()} } to="/register">Register</button>
            </div>
        )
    }
}

export default Auth