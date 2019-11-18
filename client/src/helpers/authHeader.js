export function authHeader() {
    let account = JSON.parse(localStorage.getItem('account'))

    if (account && account.token) {
        return {
            'Authorisation': 'Bearer ' + account.token
        }
    }
    else {
        return {}
    }
}