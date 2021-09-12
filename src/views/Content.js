import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import getContent from "../functions/getContent"
import { Container, Col, Image, Row, Button } from 'react-bootstrap'
import ReactMarkdown from "react-markdown"

function Content(props){
    const [imageSrc, setImageSrc] = useState('')
    const [titleText, setTitleText] = useState('')
    const [contentText, setContentText] = useState('')

    const docId = props.docId
    let history = useHistory()

    function handleClick(){
        
        history.push('/editpost')
    }

    useEffect(()=>{
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
                <Button variant="primary" onClick={() => handleClick()}>Edit post</Button>
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