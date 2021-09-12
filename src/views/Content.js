function Content(props){
    const docId = props.docId

    //Query the content from Firebase database

    return (
        <div>{docId}</div>
    )    
}

export default Content