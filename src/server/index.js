const express = require('express')
var admin = require('./firebaseAdmin.js')
const cors = require('cors')
const store = admin.firestore()

const app = express()
const port = 4000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/createpost', (req,res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const blogDB = store.collection('blog')
    blogDB.get().then(item => {
        item.forEach(doc => {console.log(doc.id)})
    })
    res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})