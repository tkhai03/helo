import React from 'react';
import App from './App'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './ducks/store'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
    <App />
    </HashRouter>
  </Provider>,
document.getElementById('root')
)

