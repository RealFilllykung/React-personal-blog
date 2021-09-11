import { useEffect, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import firebase from '../Firebase/Firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Email, Password } from '../components/LoginForm'
import { useHistory } from 'react-router'

function Login(){

    const auth = getAuth(firebase)
    let history = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        
    },[])

    function handleLogin(){
        signInWithEmailAndPassword(auth, username, password)
        .then(() => {
            console.log("Login successfully")
            history.push('/')
        })
        .catch(() => {
            console.log("Login failed")
        })
    }

    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card className="mt-3">

                        <Email getter={username} setter={setUsername}></Email>
                        <Password getter={password} setter={setPassword}></Password>

                        <Row className="mt-3">
                            <Col>
                                <Button onClick={() => handleLogin()}>Login</Button>
                            </Col>
                        </Row>

                    </Card>
                </Col>
            
            </Row>
            
        </Container>
    )
}

export default Login