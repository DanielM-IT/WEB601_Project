import {userConstants, accountConstants} from '../constants/accountConstants'
import {accountService} from '../services/accountService'
import {alertActions} from './'
import {history} from '../helpers/history'
import { func } from 'prop-types'

export const userActions = {
    login,
    logout,
    register,
    getAll
}

function login(username, password) {
    return dispatch => {
        dispatch(request({username}))

        accountService.login(username, password)
            .then(
                account => {
                    dispatch(success(account))
                    history.push('/')
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error))
                }
            )
    }

    function request(account) { 
        return { 
            type: userConstants.LOGIN_REQUEST, account
        }
    }

    function success(account) { 
        return { 
            type: userConstants.LOGIN_SUCCESS, account
        }
    }

    function failure(error) { 
        return { 
            type: userConstants.LOGIN_FAILURE, error
        }
    }
}

function logout() {
    accountService.logout()
    return {
        type: userConstants.LOGOUT
    }
}

function register(account) {
    return dispatch => {
        dispatch(request(account))

        accountService.register(account)
            .then (
                account => {
                    dispatch(success())
                    history.push('/login')
                    dispatch(alertActions.success('Registration successful'))
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error))
                }
            )
    }

    function request(account) {
        return {
            type: accountConstants.REGISTER_REQUEST, account
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

function getAll() {
    return dispatch => {
        dispatch(request())

        accountService.getAll()
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
            type: accountConstants.GETALL_REQUEST
        }
    }

    function success(account) {
        return {
            type: accountConstants.GETALL_SUCCESS, account
        }
    }

    function failure(error) {
        return {
            type: accountConstants.GETALL_FAILURE, error
        }
    }
}