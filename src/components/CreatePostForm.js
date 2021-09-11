import { Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'

export function Title(props){
    const getter = props.title
    const setter = props.setTitle

    return(
        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={getter} onChange={(e) => setter(e.target.value)}></Form.Control>
                </Form.Group>
            </Col>
        </Row>
    )
}

export function ImageLink(props){
    const getter = props.imageSrc
    const setter = props.setImageSrc

    return(
        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>Thumbnail Image Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={getter} onChange={(e) => setter(e.target.value)}></Form.Control>
                </Form.Group>
            </Col>
        </Row>
    )
}

export function Content(props){
    const getter = props.content
    const setter = props.setContent

    return(
        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={10} value={getter} onChange={(e) => setter(e.target.value)}></Form.Control>
                </Form.Group>
            </Col>
        </Row>
    )
}

export function SubmitPost(props){
    const imageSrc = props.imageSrc
    const title = props.title
    const content = props.content

    function handleClick(){
        //Send all the information to the Firebase database
        axios({
            method: 'post',
            url: 'http://localhost:4000/createpost'
        })
            .then(response => {

            })
            .catch(error => {
                
            })
        
        //Redirect to the homepage
    }


    return(
        <Button variant="primary" onClick={() => handleClick()}>Create post</Button>
    )
}