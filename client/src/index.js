import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import "semantic-ui-css/semantic.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {Provider} from 'react-redux'
import {store} from './helpers/store'


// This ReactDOM renders the application in the root(index.html) file.
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root'));



