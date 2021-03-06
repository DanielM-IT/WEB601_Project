export const accountService = {
    register
}

// The below functions handle the requests made by my redux components to the backend for data and produce a response accordingly.
function register(fields) {
    const requestOptions = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fields)
    }

    return fetch('http://localhost:4200/api/account', requestOptions)
        .then(handleResponse)
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
            }

            const error = (data && data.message) ||
            response.statusText
            return Promise.reject(error)
        }

        return data
    })
}

