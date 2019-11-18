import {combineReducers} from 'redux'

import {authentication} from './authenticationReducer.js'
import {registration} from './registrationReducer'
import {account} from './accountReducer.js'
import {alert} from './alertReducer.js'

const rootReducer = combineReducers({
    authentication,
    registration,
    account,
    alert
})

export default rootReducer