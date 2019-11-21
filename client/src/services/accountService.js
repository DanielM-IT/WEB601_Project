import {authHeader} from '../helpers/authHeader'

export const accountService = {
    login,
    logout,
    register,
    getAccount,
    getById,
    update
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    }

    return fetch(`http://localhost:4200/api/account/`, requestOptions)
        .then(handleResponse)
        .then(account => {
            localStorage.setItem('account', JSON.stringify(account))

            return account
        })
}

function logout() {
    localStorage.removeItem('account')
}

function getAccount(email) {
    const requestOptions = {
        method: 'get',
        headers: authHeader()
    }

    return fetch('http://localhost:4200/api/account/' + email, requestOptions)
        .then(handleResponse);
}

function getById(email) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch(`http://localhost:4200/api/account/${email}`, requestOptions)
        .then(handleResponse)
}

function register(fields) {
    const requestOptions = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fields)
    }

    return fetch('http://localhost:4200/api/account', requestOptions)
        .then(handleResponse)
}
            // The request type and controller is then fetched through the following url. The request method is specified
            // along with the content type specified as being converted to json format before being posted into 
            // the database table.
            // fetch('http://localhost:4200/api/account', {
            //     method: 'post',
            //     headers: {'Content-Type':'application/json'},
            //     body: JSON.stringify({
            //         "firstName": this.firstName.value,
            //         "lastName": this.lastName.value,
            //         "email": this.email.value,
            //         "phone": this.phone.value,
            //         "password": this.password.value,
            //     })
            // })

// fetch('http://localhost:4200/api/account', {
//     method: 'post',
//     headers: {'Content-Type':'application/json'},
//     body: JSON.stringify({
//         "firstName": this.firstName.value,
//         "lastName": this.lastName.value,
//         "email": this.email.value,
//         "phone": this.phone.value,
//         "password": this.password.value,
//     })
// })


function update(account) {
    const requestOptions = {
        method: 'put',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(account)
    }

    return fetch(`http://localhost:4200/api/account/${account.email}`, requestOptions)
        .then(handleResponse)
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                logout()
                // location.reload(true)
            }

            const error = (data && data.message) ||
            response.statusText
            return Promise.reject(error)
        }

        return data
    })
}

