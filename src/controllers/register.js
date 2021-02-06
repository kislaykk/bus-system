//this file registers the managers with their name email and password
// const {firebase} = require('./fireBase');
const register = (firebase,name,email,password)=> new Promise((resolve,reject)=>{
    try
    {
       
        let db = firebase.default.firestore()
        firebase.default.auth().createUserWithEmailAndPassword(email,password)
        .then(async(userCredential)=>{
            let user = userCredential.user;
            const q= db.collection('Managers').doc(user.uid);
            await q.set({
                'name':name
            })
            resolve();
        })
        .catch(err=>{
            reject(err);
        })

    }
    catch(error)
    {
        console.log(error);
        reject(error);
    }
});

module.exports = {register}