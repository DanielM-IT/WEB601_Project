import {authHeader} from '../helpers/authHeader'

export const accountService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    }

    return fetch(`/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(account => {
            localStorage.setItem('account', JSON.stringify(account))

            return account
        })
}

function logout() {
    localStorage.removeItem('user')
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch(`/users/${id}`, requestOptions).then
    (handleResponse)
}

function register(account) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(account)
    }

    return fetch(`/users/register`, requestOptions).then
    (handleResponse)
}

function update(account) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(account)
    }

    return fetch(`/users/${account.id}`, requestOptions).then
    (handleResponse)
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                logout()
                location.reload(true)
            }

            const error = (data && data.message) ||
            response.statusText
            return Promise.reject(error)
        }

        return data
    })
}

