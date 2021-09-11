import ContentCard from "../components/ContentCard"
import {Container, Row, Col} from 'react-bootstrap'

function Home(){
    return(
        <Container>
            <Row className="justify-content-md-center mt-1">
                <Col md={8}>
                    <div className="justify-content-md-center">
                        <ContentCard></ContentCard>
                    </div>
                </Col>
                
            </Row>
        </Container>
        
    )
}

export default Home