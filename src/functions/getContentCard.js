import axios from 'axios'
import serverURL from '../constants/serverURL.json'


const getContentCard = function(){

    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: serverURL.url + '/getContentCard'
        })
        .then(response => {
            resolve(response.data)
        })
    })
}

export default getContentCard