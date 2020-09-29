import React from 'react'
import {connect} from 'react-redux'
import './Nav.css'
import getUser from '../../ducks/reducer'
import logoutUser from '../../ducks/reducer'
import axios from 'axios'


function Nav(props){


// componentDidMount(){
//     if (!this.props.isLoggedIn){
//         this.props.getUser()
//         .catch((err) => {
//             this.props.history.push('/dashboard')
//         })
//     }
// }
const logout = () => {
    axios.delete('/api/auth/logout').then(() => {
        props.logoutUser()
        props.history.push('/')
    })
}

console.log(props)


     return(
        <div className="nav-container">
            <button>Home</button>
            <button>New Post</button>
            <button>Logout</button>
        </div>
    )

}

function mapStatetoProps(state){
    return state
}
export default connect(mapStatetoProps, {getUser})(Nav)