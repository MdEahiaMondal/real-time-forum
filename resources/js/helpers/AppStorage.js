class AppStorage {
    storeToken(token) {
        localStorage.setItem('token', token)
    }

    storeUser(user) {
        localStorage.setItem('user', user)
    }

    store(user, token) {
        this.storeToken(token)
        this.storeUser(user)
    }

    clear() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    getUser() {
        return localStorage.getItem('user')
    }

    getToken() {
        return localStorage.getItem('token')
    }


}


export default AppStorage = new AppStorage();
