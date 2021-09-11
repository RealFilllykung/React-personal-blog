function Content(props){
    const selectTitle = props.title

    //Query the content from Firebase database

    return (
        <div>{selectTitle}</div>
    )    
}

export default Content