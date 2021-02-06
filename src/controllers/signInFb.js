
const signInFb =(firebase,email,password)=>new Promise((resolve,reject)=>{
    console.log(firebase)
    firebase.default.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        let user= userCredential.user;
        console.log(user);
        resolve(user);
    })
    .catch((error)=>{
        console.log(error);
    })
})
module.exports = {signInFb}