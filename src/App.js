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
    <div>{
      signedIn?<Dashboard uid={signedIn.uid}/>:
      <UserContext.Provider value={{signedIn,setSignedIn}}>
        <SignOptions fireb={firebase}/>
      </UserContext.Provider>
      }
    </div>
    )
  
}



export default App;
