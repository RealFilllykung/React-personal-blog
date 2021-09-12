import firebase from '../Firebase/Firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth"

function getToken(setToken){
    

    const auth = getAuth(firebase)
    onAuthStateChanged(auth, user => {
        try{
            const token = user.accessToken
            setToken(token)
        }
        catch{
            return ''
        }
    }) 

    
}

export default getToken