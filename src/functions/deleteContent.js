import axios from 'axios'

import serverURL from '../constants/serverURL.json'


function deleteContent(token, docId){

    axios({
        method: 'post',
        url: serverURL.url + '/deletePost',
        data: {
            docId: docId,
            token: token
        },
        
    })
    .then(response => {
        const message = response.data.message
        return message
    })
}

export default deleteContent