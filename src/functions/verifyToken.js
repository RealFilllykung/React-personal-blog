import firebase from '../Firebase/Firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from 'axios'
import serverURL from '../constants/serverURL.json'

function verifyToken(setIsLogin){
    const auth = getAuth(firebase)
    onAuthStateChanged(auth, user => {
        try{
            const token = user.accessToken
            axios({
                method: 'post',
                url: serverURL.url + '/verifyToken',
                data: {
                    token: token
                }
            })
            .then(response => {
                const isAdmin = response.data.isAdmin
                setIsLogin(isAdmin)
            })
        }
        catch{
            setIsLogin(false)
        }
    })    
}

export default verifyToken