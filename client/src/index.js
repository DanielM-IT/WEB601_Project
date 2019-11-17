import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'
import "semantic-ui-css/semantic.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

// This ReactDOM renders the application in the root(index.html) file.
ReactDOM.render(
    <Router>
        {/* <Provider store> */}
            <App />
        {/* </Provider> */}
    </Router>, 
    document.querySelector('#root'));



