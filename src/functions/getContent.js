import axios from 'axios'
import serverUrl from '../constants/serverURL.json'

function getContent(docId){
    return new Promise((resolve, reject) =>{
        axios({
            method:'post',
            url: serverUrl.url + '/getContent',
            data: {id: docId}
        })
        .then(res => {
            resolve(res.data)
        })
        .catch(() => {
            reject("Error loading")
        })
    })
    
}

export default getContent