import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function AdminButton(){
    const [isLogin,setIsLogin] = useState(false)
    const [buttonText,setButtonText] = useState('')

    useEffect(() =>{
        //Check whether the user is already login or not
        
        //If the user already login, change the button text to Logout
        isLogin ? setButtonText('Logout') : setButtonText('Login')
    },[isLogin])

    return (
        <Link to="/login">
            <Button variant="light">{buttonText}</Button>
        </Link>
    )
}

export default AdminButton