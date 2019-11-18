import {accountConstants} from '../constants/accountConstants'

let account = JSON.parse(localStorage.getItem('account'))
const initialState = account ? {loggedIn: true, account} : {}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case accountConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                account: action.account
            }
        case accountConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                account: action.account
            }        
        case accountConstants.LOGIN_FAILURE:
            return {}   
        case accountConstants.LOGOUT:
            return {}
        default:
            return state     
    }
}