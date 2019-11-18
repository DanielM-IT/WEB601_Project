import {accountConstants} from '../constants/accountConstants'

export function account(state = {}, action) {
    switch (action.type) {
        case accountConstants.GETALL_REQUEST:
            return {
                loading: true
            }
        case accountConstants.GETALL_SUCCESS:
            return {
                items: action.account
            }
        case accountConstants.GETALL_FAILURE:
            return {
                error: action.error
            }
            default:
                return state
    }
}