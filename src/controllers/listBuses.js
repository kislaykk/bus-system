import { firebase } from "./fireBase";
const listBuses=(uid,observer)=>{
   
        let db = firebase.default.firestore();
        return db.collection('Managers').doc(uid).collection('Buses')
        .onSnapshot(observer);           
}

export default listBuses