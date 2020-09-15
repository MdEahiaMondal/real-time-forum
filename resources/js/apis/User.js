
import Token from "../helpers/Token";

class User {
    login(data){
        axios.post('api/auth/login', data)
            .then(res => {
                console.log(Token.isValid(res.data.access_token))
            })
            .catch(error => {
                console.log(error.response)
            })
    }
}


export default User = new User();

