import {accountConstants} from '../constants/accountConstants'
import {accountService} from '../services/accountService'
import {alertActions} from './alertActions'

export const accountActions = {
    login,
    logout,
    register,
    getAccount
}

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

    function request(fields) {
        return {
            type: accountConstants.REGISTER_REQUEST, fields
        }
    }

    function success(account) {
        return {
            type: accountConstants.REGISTER_SUCCESS, account
        }
    }

    function failure(error) {
        return {
            type: accountConstants.REGISTER_FAILURE, error
        }
    }
}

function getAccount() {
    return dispatch => {
        dispatch(request())

        accountService.getAccount()
            .then (
                account => {
                    dispatch(success(account))
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }

    function request() {
        return {
            type: accountConstants.GETACCOUNT_REQUEST
        }
    }

    function success(account) {
        return {
            type: accountConstants.GETACCOUNT_SUCCESS, account
        }
    }

    function failure(error) {
        return {
            type: accountConstants.GETACCOUNT_FAILURE, error
        }
    }
}