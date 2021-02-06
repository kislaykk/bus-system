var firebase = require('firebase');
const {firebaseConfig} = require('../credentials/FireBaseAuth');
firebase.default.initializeApp(firebaseConfig)

module.exports={firebase:firebase}