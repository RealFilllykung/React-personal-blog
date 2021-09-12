import ContentCard from "../components/ContentCard"
import {Container, Row, Col} from 'react-bootstrap'

import getContentCard from "../functions/getContentCard"
import { useEffect, useState } from "react"

function Home(props){
    const setSelectedTitle = props.setTitle
    const [cardIdArray, setCardIdArray] = useState([])

    useEffect(() => {
        getContentCard(setCardIdArray)
    },[])

    function RenderContentCard(){

        cardIdArray.map(item => {
            return(
                <Row className="justify-content-md-center mt-1">
                    <Col md={8}>
                        <div>
                            <ContentCard cardId={item} setTitle={setSelectedTitle}></ContentCard>
                        </div>
                    </Col>
                </Row>
            )
        })

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