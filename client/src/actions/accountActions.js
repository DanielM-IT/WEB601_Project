import {accountConstants} from '../constants/accountConstants'
import {accountService} from '../services/accountService'
import {alertActions} from './alertActions'

// Exports my declared functions
export const accountActions = {
    login,
    logout,
    register,
}

// The below functions are using Thunk to call them from within each other. The parent function is the dispatcher which dispatches the
// new state to the store. The child functions are the actions which are used to change the state.
function login(email, password) {
    return dispatch => {
        dispatch(request({email}))

        accountService.login(email, password)
            .then(
                account => {
                    dispatch(success(account))
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error))
                }
            )
    }

    function request(account) { return { type: accountConstants.LOGIN_REQUEST, account } }
    function success(account) { return { type: accountConstants.LOGIN_SUCCESS, account } }
    function failure(error) { return { type: accountConstants.LOGIN_FAILURE, error } }
}

function logout() {
    accountService.logout()
    return {
        type: accountConstants.LOGOUT
    }
}

function register(fields) {
    return dispatch => {
        dispatch(request(fields))

        accountService.register(fields)
            .then (
                _fields => {
                    dispatch(success())
                    dispatch(alertActions.success('Registration successful'))
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error))
                }
            )
    }

    function request(fields) { return { type: accountConstants.REGISTER_REQUEST, fields } }
    function success(account) { return { type: accountConstants.REGISTER_SUCCESS, account } }
    function failure(error) { return { type: accountConstants.REGISTER_FAILURE, error } }
}

