const express = require('express')
var admin = require('./firebaseAdmin.js')
var uidAdmin = require('../Firebase/uid.json')
const cors = require('cors')
const bodyParser = require('body-parser')
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
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//======================= GET =======================
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//======================= POST =======================
app.post('/createpost', (req,res) =>{
    const blogDB = store.collection('blog')
    blogDB.get().then(item => {
        item.forEach(doc => {console.log(doc.id)})
    })
    res.sendStatus(200)
})

app.post('/verifyToken', (req,res) => {
  const token = req.body.token

  //Verify UID of the client
  admin.auth().verifyIdToken(token)
    .then(decodedToken => {
      const uid = decodedToken.uid
      if (uid === uidAdmin.uid) 
      res.status(200).send({isAdmin: true})
      return
    })
    
  //res.status(200).send({isAdmin: false})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})