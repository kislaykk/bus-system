
const signInFb =(firebase,email,password)=>new Promise((resolve,reject)=>{
    firebase.default.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        let user= userCredential.user;
        resolve(user);
    })
    .catch((error)=>{
        reject(error);
    })
})
module.exports = {signInFb}