import axios from 'axios';
import {firebase} from './fireBase';
let urlForWeb3Endpoint =require('./urlForWeb3Endpoint.json');
const getEtherAccountDetails=  (uid)=>new Promise(async (resolve,reject)=>{
    try
    {
        const db = firebase.default.firestore();
        const info=await db.collection('Managers').doc(uid).get()
        const response = await axios({
            method:'POST',
            data:{
                'address':info.data().address,
                
            },
            url:`${urlForWeb3Endpoint.endpoint}/wallet/balance`

            
        })
        resolve({
            address:info.data().address,
            privateKey:info.data().privateKey,
            balance:response.data.balance
        })
    }
    catch(error)
    {
        reject(error)
    }
})
export default getEtherAccountDetails;