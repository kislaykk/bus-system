
const signInFb =(firebase,email,password)=>{
    console.log(firebase)
    firebase.default.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        let user= userCredential.user;
        console.log(user.uid);
    })
    .catch((error)=>{
        console.log(error);
    })
}
module.exports = {signInFb}