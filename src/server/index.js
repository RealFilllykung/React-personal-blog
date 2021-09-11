const express = require('express')
var admin = require('./firebaseAdmin.js')
const cors = require('cors')
var bodyParser = require('body-parser')
const store = admin.firestore()

const app = express()
const port = 4000

/* Read all item inside Firebase example
const blogDB = store.collection('blog')
    blogDB.get().then(item => {
        item.forEach(doc => {console.log(doc.id)})
    })
    res.sendStatus(200)
*/

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/createpost', (req,res) =>{
    const blogDB = store.collection('blog')
    blogDB.get().then(item => {
        item.forEach(doc => {console.log(doc.id)})
    })
    res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})