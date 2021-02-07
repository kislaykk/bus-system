import React from 'react';
import AddBus from './AddBus';
import ListBusAndEdit from './ListBusAndEdit'
import { BrowserRouter as Router , Switch, Route,Link } from "react-router-dom";
function Dashboard(props){
    return(
        <div>
            {props.uid}
            
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
            </ul>
            <Switch>
              <Route path="/busList"><ListBusAndEdit uid={props.uid}/></Route>
              <Route path="/addBus"><AddBus uid={props.uid}/></Route>
              <Route path="/etherAccount"><h1>your account</h1></Route>
            </Switch>
          </div>
        </Router>
      
        </div>
    )
}

export default Dashboard;