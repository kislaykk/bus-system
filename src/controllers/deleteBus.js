import { firebase } from "./fireBase";
let deleteBus =(docId,uid)=>new Promise((res,rej)=>{
    let db=firebase.default.firestore();
    return db.collection('Managers').doc(uid).collection('Buses').doc(docId).delete()
    .then(async ()=>{
        await db.collection('Bus-collection-public').doc(docId).delete();
        res()
    })
    .catch(e=>{
        rej(e)
    })
})
export default deleteBus