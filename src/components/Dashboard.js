import React ,{useContext}from 'react';
import AddBus from './AddBus';
import ListBusAndEdit from './ListBusAndEdit';
import EtherAccount from  './EtherAccount';
import { UserContext } from '../App';

import { BrowserRouter as Router , Switch, Route,Link } from "react-router-dom";
function Dashboard(props){
  const {signedIn,setSignedIn} = useContext(UserContext)
    return(
        <div>

            
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/busList">busses</Link>
              </li>
              <li>
                <Link to="/addBus" >AddBus</Link>
              </li>
              <li>
                <Link to="/etherAccount">Ether Account</Link>
              </li>
              <li>
                <Link onClick={()=>{
                  setSignedIn(null)
                }}>Log out</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/busList"><ListBusAndEdit uid={props.uid}/></Route>
              <Route path="/addBus"><AddBus uid={props.uid}/></Route>
              <Route path="/etherAccount"><EtherAccount uid={props.uid}/></Route>
            </Switch>
          </div>
        </Router>
      
        </div>
    )
}

export default Dashboard;