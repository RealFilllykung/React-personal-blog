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

app.get('/getContentCard', (req, res) => {
  //Read all card data from Firebase
  const blogDB = store.collection('blog')
  var cardIdArray = []
    blogDB.get().then(item => {
        item.forEach(doc => {
          cardIdArray.push(doc.id)
        })
        res.status(200).send(cardIdArray)
    })
})

//======================= POST =======================
app.post('/createPost', (req,res) =>{

  //Get the content from the client
  const newContent = req.body

  //Verify the user that they are the admin or not
  const token = newContent.token

  if(token === ''){
    res.status(200).send({message: 'No authorization to post the new content'})
  }
  else{
    admin.auth().verifyIdToken(token)
    .then(decodedToken => {
      const uid = decodedToken.uid
      if (uid === uidAdmin.uid) {
        //If there is no content or title
        if (newContent.content === '' || newContent.title === '') {
          res.status(200).send({message: 'Please insert the content and title'})
        }
        else{
          //Send the content to the database
          const blogDB = store.collection('blog')
          blogDB.add(newContent)
          .then((response) => {
            res.status(200).send({message: 'Done adding new content'})
          })
        }
      }
      else{
        res.status(200).send({message: 'No authorization to post the new content'})
      }
      return
    })
  }
})

app.post('/editPost', (req,res) =>{

  //Get the content from the client
  const newContent = req.body
  const docId = req.body.docId

  //Verify the user that they are the admin or not
  const token = newContent.token

  if(token === ''){
    res.status(200).send({message: 'No authorization to post the new content'})
  }
  else{
    admin.auth().verifyIdToken(token)
    .then(decodedToken => {
      const uid = decodedToken.uid
      if (uid === uidAdmin.uid) {
        //If there is no content or title
        if (newContent.content === '' || newContent.title === '') {
          res.status(200).send({message: 'Please insert the content and title'})
        }
        else{
          //Send the content to the database
          const blogDB = store.collection('blog')
          blogDB.doc(docId).set(newContent)
          .then((response) => {
            res.status(200).send({message: 'Done editting new content'})
          })
        }
      }
      else{
        res.status(200).send({message: 'No authorization to post the new content'})
      }
      return
    })
  }
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
})

app.post('/getContent', (req, res) => {
  const blogDB = store.collection('blog')
  const docId = req.body.id
  blogDB.doc(docId).get()
    .then(doc => {
      const data = doc.data()
      res.status(200).send(data)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})