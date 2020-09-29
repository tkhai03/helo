import React from 'react'
import {connect} from 'react-redux'
import './Nav.css'

// import Auth from './Components/Auth/Auth'
// import Dashboard from './Components/Dashboard/Dashboard'
// import Post from './Components/Post/Post'

function Nav(props){



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
export default connect(mapStatetoProps)(Nav)