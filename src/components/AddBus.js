import React, { useState } from 'react';
import addBus from '../controllers/addBus'
function addBusToStore(busName,busNumber,beginsFrom,destination,stoppages,uid)
{
    addBus(busName,busNumber,beginsFrom,destination,stoppages,uid)
    .then(()=>{
        alert("bus added");
    })
    .catch(err=>{
        alert(err.message);
    })
}
function AddBus(props)
{
    const [busName,setBusName] = useState('');
    const [busNumber,setBusNumber] = useState('');
    const [beginsFrom,setBeginsFrom] =useState('');
    const [destination,setDestination]=useState('');
    const [stoppage,setStoppage]=useState('');
    const [fare,setFare]=useState('');
    const [stoppages,setStoppages] = useState([]);
    function handleRemove(index)
    {
        
        let stoppageAfterRemoval = stoppages.filter((ele,i)=>i!=index)
        setStoppages(stoppageAfterRemoval);
    }
    const Destination=({stoppages,onRemove})=>(
        <ul>{stoppages.map((el,index)=>(
            <li key={`${el.stoppage}-${el.fare}`}>
                {el.stoppage}-{el.fare}-wei
                <button type="button" onClick={()=>onRemove(index)}>Remove</button>
            </li>
        ))}</ul>
    )
    return(
    <div>
        
        <Destination stoppages={stoppages} onRemove={handleRemove}/>
        <label>Bus Name:<input type="text" value={busName} onChange={(e)=>{setBusName(e.target.value)}}></input></label><br/>
            <label>Bus Number:<input type="text" value={busNumber} onChange={(e)=>{setBusNumber(e.target.value)}}></input></label><br/>
            <label>Begins from:<input type="text" value={beginsFrom} onChange={(e)=>{setBeginsFrom(e.target.value)}}></input></label><br/>
            <label>destination:<input type="text" value={destination} onChange={(e)=>{setDestination(e.target.value)}}></input></label><br/>
            <br/><br/><br/>
            <label>
                Add stoppages:<br/>
                <input placeholder={"stoppage-name"} type="text" value={stoppage} onChange={(e)=>{setStoppage(e.target.value)}}></input>
                <input placeholder={"fare in wei"} type="text" value={fare} onChange={(e)=>{setFare(e.target.value)}}></input>
                <button onClick={()=>{
                    
                    // let s=stoppage;
                    // let p=fare;
                    // if(s.trim())
                    if(stoppage.trim() && fare.trim() && !isNaN(fare))
                    {
                        let stoppagesAfterAddition = stoppages;
                        stoppagesAfterAddition.push({stoppage:stoppage,fare:fare})
                        setStoppages(stoppagesAfterAddition);
                        setStoppage('');
                        setFare('');
                    }
                    else
                    {
                        alert('stoppage-name and fare should not be empty ,fare should be a number')
                    }  
                    
                }}>Add stoppage</button>
                <input type="submit" value="add" onClick={(e)=>{
                    e.preventDefault();
                    addBusToStore(busName,busNumber,beginsFrom,destination,stoppages,props.uid);
                    setBusName('');
                    setBusNumber('');
                    setBeginsFrom('');
                    setDestination('');
                    setStoppage('');
                    setFare('');
                    setStoppages([])
                }}/>
            </label>
        
            
        </div>
    )
}
export default AddBus;