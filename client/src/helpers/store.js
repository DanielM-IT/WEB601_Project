import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers'


// This is where all my store is created in which all my applications state is stored. I have additionally 
// added middleware. Thunk and logger. 
const loggerMiddleware = createLogger()

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)