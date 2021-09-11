import ContentCard from "../components/ContentCard"
import {Container, Row, Col} from 'react-bootstrap'

function Home(props){
    const setSelectedTitle = props.setTitle

    function RenderContentCard(){
        //Read all card information from Firebase

        //Return the list of card
        return(
        <Row className="justify-content-md-center mt-1">
                <Col md={8}>
                    <div>
                        <ContentCard setTitle={setSelectedTitle}></ContentCard>
                    </div>
                </Col>
        </Row>)
    }

    return(
        <Container>
            {RenderContentCard()}
        </Container>
    )
}

export default Home