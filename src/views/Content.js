import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import getContent from "../functions/getContent"
import deleteContent from "../functions/deleteContent"
import { Container, Col, Image, Row, Button } from 'react-bootstrap'
import ReactMarkdown from "react-markdown"
import verifyToken from "../functions/verifyToken"
import getToken from "../functions/getToken"

function Content(props){
    const [imageSrc, setImageSrc] = useState('')
    const [titleText, setTitleText] = useState('')
    const [contentText, setContentText] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [token, setToken] = useState('')

    const docId = props.docId
    let history = useHistory()

    function handleClick(){
        history.push('/editpost')
    }

    function handleDeleteClick(){
        //Delete the post and go back to the main page
        deleteContent(token, docId)
        history.push('/')
    }

    function RenderEditButton(){
        if (isAdmin){
            return (
                <div>
                    <Row className="mt-3">
                        <Button variant="primary" onClick={() => handleClick()}>Edit post</Button>
                    </Row>
                    <Row className="mt-3">
                        <Button variant="danger" onClick={() => handleDeleteClick()}>Delete post</Button>
                    </Row>
                </div>
                
                
            )
        }
        else return(<div></div>)
    }

    useEffect(()=>{
        //Check if the user is an admin
        verifyToken(setIsAdmin)

        //Get token for delete content authorization
        getToken(setToken)

        //Ask the data of this post from server
        getContent(docId)
            .then(response => {
                const content = response.content
                const title = response.title
                const imageSrc = response.imageSrc
                
                setContentText(content)
                setTitleText(title)
                setImageSrc(imageSrc)
            })

    },[docId])

    return (
        <Container>

            <Row>
                <RenderEditButton></RenderEditButton>
            </Row>

            <Row>
                <Col>
                <h1>{titleText}</h1>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                <Image src={imageSrc} rounded fluid/>
                </Col>
            </Row>
            
            <Row className="mt-3">
                <Col>
                    <ReactMarkdown>
                        {contentText}
                    </ReactMarkdown>
                </Col>
            </Row>
            
        </Container>
        
    )    
}

export default Content