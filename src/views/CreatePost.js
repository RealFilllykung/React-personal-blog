import { Title, ImageLink, Content, SubmitPost, WarningMessage } from '../components/CreatePostForm'

import { useState } from "react"
import { Container } from 'react-bootstrap'

function CreatePost(){

    //All of this information is for thumbnail
    const [imageSrc, setImageSrc] = useState('')
    const [titleText, setTitleText] = useState('')
    const [contentText, setContentText] = useState('')
    const [warningMessagem, setWarningMessage] = useState('')
    
    return(
        <Container className="mt-5">
            <Title title={titleText} setTitle={setTitleText}></Title>
            <ImageLink imageSrc={imageSrc} setImageSrc={setImageSrc}></ImageLink>
            <Content content={contentText} setContent={setContentText}></Content>
            <SubmitPost setWarningMessage={setWarningMessage} title={titleText} imageSrc={imageSrc} content={contentText}></SubmitPost>
            <WarningMessage warningMessage={warningMessagem}></WarningMessage>
        </Container>
    )
}

export default CreatePost