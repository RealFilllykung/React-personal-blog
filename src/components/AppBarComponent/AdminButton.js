import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import firebase from '../../Firebase/Firebase'
import { getAuth, signOut } from 'firebase/auth'

function AdminButton(props){

    const [isLogin, setIsLogin] = useState(false)
    const [buttonText, setButtonText] = useState('')
    const [redirectLink, setRedirectLink] = useState('/login')

    useEffect(() =>{
        //Check whether the user is already login or not
        setIsLogin(props.isLogin)
        
        //If the user already login, change the button text to Logout and logout the user from the system
        if (isLogin){
            setButtonText('Logout')
            //Logout the user
            setRedirectLink('/')
        }
        else{
            setButtonText('Login')
        }
    },[isLogin,props.isLogin])

    function RenderButton(){

        function handleLogout(){
            const auth = getAuth(firebase)
            signOut(auth)
            .then(() => {
                window.location.reload(false)        
            })
            .catch(error => {
                console.log(error)
            })
        }

        if (isLogin) {
            return(
                <Button variant="light" onClick={() => handleLogout()}>{buttonText}</Button>
            )

        }
        else return(
            <Link to={redirectLink}>
                    <Button variant="light">{buttonText}</Button>
            </Link>
        )
    }


    return (
        <RenderButton></RenderButton>
    )
}

export default AdminButton