import { useEffect, useState } from 'react'
import { Card, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import getContent from '../functions/getContent'

function ContentCard(props){
    const [imageSrc, setImageSrc] = useState('')
    const [titleText, setTitleText] = useState('')
    const [contentText, setContentText] = useState('')

    const setDocId = props.setDocId

    useEffect(() => {
        //Get the information of this card from Firebase database
        getContent(props.cardId)
        .then(response => {
            const content = response.content
            const imageSrc = response.imageSrc
            const title = response.title
            setTitleText(title)
            setImageSrc(imageSrc)
            setContentText(content)
        })
    },[props.cardId])

    function handleLinkClick(){

        setDocId(props.cardId)
    }

    return(
        <Card>
            <Card.Body>
                <Image src={imageSrc} rounded fluid/>
            </Card.Body>
            <Card.Body>
                <Card.Title>
                    {titleText}
                </Card.Title>
                <Card.Text>
                    {contentText}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Link 
                    onClick={() => handleLinkClick()}
                to={{
                    pathname: '/content'
                }}>
                    <Button variant="primary">Read more</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ContentCard