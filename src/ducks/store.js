
import {createStore, applyMiddleware} from 'redux'
// import promisedMiddleware from 'redux-promise-middleware'
// import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'

export default createStore(
    reducer, 
    // composeWithDevTools(applyMiddleware(promisedMiddlware))
)