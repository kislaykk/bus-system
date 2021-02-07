//this file registers the managers with their name email and password
// const {firebase} = require('./fireBase');
let axios = require('axios');
const register = (firebase,name,email,password)=> new Promise((resolve,reject)=>{
    try
    {
       
        let db = firebase.default.firestore()
        firebase.default.auth().createUserWithEmailAndPassword(email,password)
        .then(async(userCredential)=>{
            let user = userCredential.user;
            const q= db.collection('Managers').doc(user.uid);
            const response = await axios({
                method:'get',
                url:'https://polar-depths-87667.herokuapp.com/wallet/account'
            })
            await q.set({
                'name':name,
                'address':response.data.values.address,
                'privateKey':response.data.values.privateKey
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