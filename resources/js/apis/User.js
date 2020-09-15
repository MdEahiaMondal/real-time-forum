
import Token from "../helpers/Token";
import AppStorage from "../helpers/AppStorage";

class User {
    login(data){
        axios.post('api/auth/login', data)
            .then(res => {
                this.responseAfterLoggedIn(res)
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    //save user info and token on local storage to user browser
    responseAfterLoggedIn(res){
        const token = res.data.access_token
        const user = res.data.user
       if(Token.isValid(token)){
            AppStorage.store(user, token)
       }
    }

    hasToken(){
        const appToken = AppStorage.getToken()
        if (appToken){
            return  Token.isValid(appToken) ? true : false
        }
        return false
    }

    loggedIn(){
        return this.hasToken()
    }

    logout(){
        AppStorage.clear()
    }

    name(){
        if(this.loggedIn()){
            return  AppStorage.getUser()
        }
    }

    id(){
        if(this.loggedIn()){
            const token = Token.payload(AppStorage.getToken())
            return token.sub
        }
    }
}


export default User = new User();
