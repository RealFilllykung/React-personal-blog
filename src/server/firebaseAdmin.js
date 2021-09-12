var admin = require("firebase-admin");
var serviceAccount = require("../Firebase/react-personal-blog-firebase-adminsdk-on7ca-db62aa7c86.json");

//Initialize phase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin