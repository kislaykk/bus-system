import React, { useState,useEffect } from "react";
import listBuses from '../controllers/listBuses';
import deleteBus from '../controllers/deleteBus';
function ListBusAndEdit(props){
    let {uid}=props;
    let [busList,setBusList] = useState([])
    
    const deleteBusFromList=(docId,uid)=>{
        deleteBus(docId,uid)
        .then(setBusList(busList))
        .catch(e=>{
            alert(e.message)
        })
    }
    useEffect(()=>{
        const unsubscribe = listBuses(uid,{
            next: querySnapshot =>{
                const blist=querySnapshot.docs.map(docSnapshot=>[docSnapshot.id,docSnapshot.data()]);
                setBusList(blist);

            },
            error:()=>{alert('error')}
        })
        return unsubscribe
    },[uid,busList])
    const BusStoppagesFormat=(props)=>(
        <ul>
            {
                props.stoppages.map(stoppage=><li key={stoppage.stoppage}>{stoppage.stoppage}-{stoppage.fare}</li>)
            }
        </ul>
    )
    return (
        <div>
            <h1>List of Bus</h1>
            
            <ul>
                {
                busList.map((element)=>
                    <li key={element[0]}> 
                        bus name:{element[1].busName} <br/>
                        from:{element[1].beginsFrom} <br/>
                        to:{element[1].destination} <br/>
                        bus Number:{element[1].busNumber} <br/>
                        stoppages:<BusStoppagesFormat stoppages={element[1].stoppages}/>
                        <button onClick={()=>{deleteBusFromList(element[0],props.uid)}}>delete</button>
                    </li>
                    )
                }
            </ul>
        </div>
        
    )
}
export default ListBusAndEdit;