import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function CreatePostButton(props){
    let history = useHistory()

    function RedirectToCreatePost(){
        history.push('createpost')
    }

    const isLogin = props.isLogin

    if (isLogin){
        return (<Button variant="light" onClick={() => {RedirectToCreatePost()}}>Create Post</Button>)
    }
    return(
        <div></div>
    )
}

export default CreatePostButton