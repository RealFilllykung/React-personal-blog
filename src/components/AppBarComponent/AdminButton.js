import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function AdminButton(){
    const [isLogin, setIsLogin] = useState(false)
    const [buttonText, setButtonText] = useState('')
    const [redirectLink, setRedirectLink] = useState('/login')

    useEffect(() =>{
        //Check whether the user is already login or not
        setIsLogin(false)
        
        //If the user already login, change the button text to Logout and logout the user from the system
        if (isLogin){
            setButtonText('Logout')
            //Logout the user
            setRedirectLink('/')
        }
        else{
            setButtonText('Login')
        }
    },[isLogin])



    return (
        <Link to={redirectLink}>
            <Button variant="light">{buttonText}</Button>
        </Link>
    )
}

export default AdminButton