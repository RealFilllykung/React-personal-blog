import { Title, ImageLink, Content, SubmitPost } from '../components/CreatePostForm'

import { useState } from "react"
import { Container, Row, Col } from 'react-bootstrap'

function CreatePost(){

    //All of this information is for thumbnail
    const [imageSrc, setImageSrc] = useState('')
    const [titleText, setTitleText] = useState('')
    const [contentText, setContentText] = useState('')
    
    return(
        <Container className="mt-5">
            <Title title={titleText} setTitle={setTitleText}></Title>
            <ImageLink imageSrc={imageSrc} setImageSrc={setImageSrc}></ImageLink>
            <Content content={contentText} setContent={setContentText}></Content>
            <SubmitPost title={titleText} imageSrc={imageSrc} content={contentText}></SubmitPost>
        </Container>
    )
}

export default CreatePost