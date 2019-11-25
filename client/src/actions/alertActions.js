import {alertConstants} from '../constants/alertConstants'

// Exports my declared functions
export const alertActions = {
    success,
    error,
    clear
}

// The below functions are the actions which are used to change the state.
function success(message) {
    return {
        type: alertConstants.SUCCESS, message
    }
}

function error(message) {
    return {
        type: alertConstants.ERROR, message
    }
}
        
function clear(message) {
    return {
        type: alertConstants.CLEAR, message
    }
}       
