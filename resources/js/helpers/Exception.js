class Exception {
    helpers(error){
        this.isExipred(error.response.data.message)
    }

    isExipred(data) {
        if (data == 'Token is Expired'){
            User.logout()
        }
    }
}

export default Exception = new Exception();
