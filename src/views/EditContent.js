import { Title, ImageLink, Content, SubmitEditPost, WarningMessage } from '../components/EditPostForm'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import getContent from '../functions/getContent'

function EditContent(props){
    const docId = props.docId

    const [imageSrc, setImageSrc] = useState('')
    const [titleText, setTitleText] = useState('')
    const [contentText, setContentText] = useState('')
    const [warningMessage, setWarningMessage] = useState('')

    useEffect(() => {
        //Get the post data from the server
        getContent(docId)
            .then(response => {
                console.log(response)
                setTitleText(response.title)
                setImageSrc(response.imageSrc)
                setContentText(response.content)
            })
    },[docId])
    
    return(
        <Container className="mt-5">
            <Title title={titleText} setTitle={setTitleText}></Title>
            <ImageLink imageSrc={imageSrc} setImageSrc={setImageSrc}></ImageLink>
            <Content content={contentText} setContent={setContentText}></Content>
            <SubmitEditPost docId={docId} setWarningMessage={setWarningMessage} title={titleText} imageSrc={imageSrc} content={contentText}></SubmitEditPost>
            <WarningMessage warningMessage={warningMessage}></WarningMessage>
        </Container>
    )
}

export default EditContent