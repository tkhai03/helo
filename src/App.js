import React from 'react'
import Nav from './Components/Nav/Nav'
import routes from './routes'
import './App.css'




function App(props) {
  return (
    <div className="App">
      {/* {props.location.pathname !== '/' ? <Nav/> : null} */}
      {routes}
    </div>
  )
}

export default App
