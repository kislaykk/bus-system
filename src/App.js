import React, { useState } from 'react';
import SignOptions from './components/SignOptions'
import Dashboard from './components/Dashboard';
import { firebase } from "./controllers/fireBase";
export const UserContext = React.createContext();
//Changing this component to function component to use useState hook
function App()
{
  const [signedIn,setSignedIn]=useState(null);
  
    return (
    <div>
      {
      signedIn?<UserContext.Provider value={{signedIn,setSignedIn}}>
        <Dashboard uid={signedIn.uid}/>
      </UserContext.Provider>:
      <UserContext.Provider value={{signedIn,setSignedIn}}>
        <SignOptions fireb={firebase}/>
      </UserContext.Provider>
      }
      {/* <Dashboard uid={"SFm4oH0kC6hSd0yPRtDkuZVNSZ82"}/> */}
    </div>
    )
  
}



export default App;
