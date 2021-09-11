var admin = require("firebase-admin");
var serviceAccount = require("../Firebase/react-personal-blog-firebase-adminsdk-on7ca-db62aa7c86.json");

//Initialize phase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://react-personal-blog-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

module.exports = admin