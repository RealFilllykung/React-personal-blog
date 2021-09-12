import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import getContent from "../functions/getContent"
import { Container, Col, Image, Row, Button } from 'react-bootstrap'
import ReactMarkdown from "react-markdown"
import verifyToken from "../functions/verifyToken"

function Content(props){
    const [imageSrc, setImageSrc] = useState('')
    const [titleText, setTitleText] = useState('')
    const [contentText, setContentText] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const docId = props.docId
    let history = useHistory()

    function handleClick(){
        
        history.push('/editpost')
    }

    function RenderEditButton(){
        if (isAdmin){
            return (
                <Button variant="primary" onClick={() => handleClick()}>Edit post</Button>
            )
        }
        else return(<div></div>)
    }

    useEffect(()=>{
        //Check if the user is an admin
        verifyToken(setIsAdmin)

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