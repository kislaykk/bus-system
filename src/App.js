import React from 'react';
import SignOptions from './components/SignOptions'
import Dashboard from './components/Dashboard';
import { firebase } from "./controllers/fireBase";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  render()
  {
    let isSignedIn;
    firebase.default.auth().onAuthStateChanged((user)=>{
      if (user){
        isSignedIn= user;
        console.log(isSignedIn.uid);

      }
    })
    return (<div>{
      isSignedIn?<Dashboard uid={isSignedIn.uid}/>:<SignOptions fireb={firebase}/>}</div>)
  }
}



export default App;
