import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import getContent from '../functions/getContent'

function ContentCard(props){
    const [imageSrc, setImageSrc] = useState('')
    const [titleText, setTitleText] = useState('')
    const [contentText, setContentText] = useState('')

    const setSelectedTitle = props.setTitle

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
    },[])

    function handleLinkClick(){
        setSelectedTitle(titleText)
    }

    return(
        <Card>
            <Card.Body>
                <Card.Img variant="top" src={imageSrc}></Card.Img>
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