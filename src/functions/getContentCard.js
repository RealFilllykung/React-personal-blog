import axios from 'axios'
import serverURL from '../constants/serverURL.json'

function getContentCard(setCardIdArray){
    axios({
        method: 'get',
        url: serverURL.url + '/getContentCard'
    })
    .then(response => {
        setCardIdArray([...response.data])
        
    })

}

export default getContentCard