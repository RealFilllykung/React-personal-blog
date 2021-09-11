import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ContentCard(){
    const [imageSrc, setImageSrc] = useState('')
    const [titleText, setTitleText] = useState('')
    const [contentText, setContentText] = useState('')
    const [redirectLink, setRedirectLink] = useState('')

    useEffect(() => {
        setImageSrc('https://picsum.photos/300/200')
        setTitleText('Test Title')
        setContentText('Content Text')
        setRedirectLink('/')
    },[])

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
                <Link to={{
                    pathname: '/content'
                }}>
                    <Button variant="primary">Read more</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ContentCard