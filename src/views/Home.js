import ContentCard from "../components/ContentCard"
import {Container, Row, Col} from 'react-bootstrap'

import getContentCard from "../functions/getContentCard"
import { useLayoutEffect, useState } from "react"

function Home(props){
    const setSelectedTitle = props.setTitle
    const [cardIdArray, setCardIdArray] = useState([])

    function setCardArray(){
        getContentCard()
            .then(response => {
                const returnResponse = () => {
                    return [...response]
                }
                setCardIdArray(returnResponse)
            })
    }

    useLayoutEffect(() => {
        setCardArray()
    },[])

    function RenderContentCard(){
        return cardIdArray.map(item => {
            console.log(item)
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
    }

    return(
        <Container>
            {RenderContentCard()}
        </Container>
    )
}

export default Home