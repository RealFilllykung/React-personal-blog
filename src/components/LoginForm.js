import { Row, Col, Form } from 'react-bootstrap'

export function Email(props){
    const getter = props.getter
    const setter = props.setter
    
    return(
        <Row className="justify-content-md-center">
            <Col md={7}>
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter admin email" 
                    value={getter} 
                    onChange={(e) => {setter(e.target.value)}}>
                </Form.Control>
                </Form.Group>
            </Col>
        </Row>
    )
}

export function Password(props){
    const getter = props.getter
    const setter = props.setter

    return(
        <Row  className="justify-content-md-center">
            <Col md={7}>
                <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Enter password" 
                    value={getter} 
                    onChange={(e) => {setter(e.target.value)}}>
                </Form.Control>
                </Form.Group>
            </Col>
        </Row>
    )
}