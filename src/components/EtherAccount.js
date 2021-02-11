import  React, { useEffect, useState } from 'react';
import getEtherAccountDetails from '../controllers/getEtherAccountDetails';
function InfoTemplate(props)
{
    return(
        <div>
            address : {props.address}<br/>
            private Key : {props.privateKey} <br/>
            balance: {props.balance} <br/>
        </div>
    )
}
function EtherAccount(props)
{   
    const [balance,setBalance]=useState('');
    const [address,setAddress]=useState('');
    const [privateKey,setPrivateKey]=useState('');
    useEffect(async ()=>{
        let info= await  getEtherAccountDetails(props.uid);
        return (()=>{
            setPrivateKey(info.privateKey);
            setAddress(info.address);
            setBalance(info.balance);
        })()
    },[])
    
    return(
        <div>
            <h1>Account</h1>
            {balance===''?<p>Loading....</p>:<InfoTemplate address={address} privateKey={privateKey} balance={balance}/>}
        </div>
    )
}

export default EtherAccount;
