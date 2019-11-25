import {combineReducers} from 'redux'

import {registration} from './registrationReducer'
import {alert} from './alertReducer.js'

const rootReducer = combineReducers({
    registration,
    alert
})

export default rootReducer