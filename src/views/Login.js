import { useEffect, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import firebase from '../Firebase/Firebase'
import { Email, Password } from '../components/LoginForm'

function Login(){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(firebase.name)
    },[])

    function handleLogin(){
        console.log(username + " " + password)
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