import {accountConstants} from '../constants/accountConstants'

// These are my registration reducers which receive a state, perform an action on it and return the new state.
export function registration(state = {}, action) {
    switch (action.type) {
        case accountConstants.REGISTER_REQUEST:
            return {
                registering: true
            }
        case accountConstants.REGISTER_SUCCESS:
            return {}        
        case accountConstants.REGISTER_FAILURE:
            return {}   
        default:
            return state     
    }
}