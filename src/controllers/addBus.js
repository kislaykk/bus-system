import {firebase} from './fireBase';
const addBus=(busName,busNumber,beginsFrom,destination,stoppages,uid)=>new Promise((resolve,reject)=>{
    try
    {
        let db = firebase.default.firestore();
        db.collection('Managers').doc(uid).collection('Buses').add({
            busName,busNumber,beginsFrom,destination,stoppages
        })
        .then(async (res)=>{
            const docRef=db.collection('Managers').doc(uid);
            const doc=await docRef.get();
            await db.collection('Bus-collection-public').doc(res.id).set({busName,busNumber,beginsFrom,destination,stoppages,address:doc.data().address})
            resolve();
        })
        .catch((error)=>{
            reject(error);
        })
    }
    catch(error)
    {
        reject(error);
    }
})

export default addBus