import {combineReducers} from 'redux'
import {registration} from './registrationReducer'
import {alert} from './alertReducer.js'

// This is where all my reducers are combined to make one root reducer as per Redux's requirements.
const rootReducer = combineReducers({
    registration,
    alert
})

export default rootReducer