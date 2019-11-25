import {alertConstants} from '../constants/alertConstants'

// These are my alert reducers which receive a state, perform an action on it and return the new state.
export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            }
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                massage: action.message
            }
        case alertConstants.CLEAR:
            return {}
        default:
            return state
    }
}