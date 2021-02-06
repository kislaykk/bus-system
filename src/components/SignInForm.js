import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
let {signInFb} =require('../controllers/signInFb');
function SignInForm(props)
{
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {signedIn,setSignedIn} = useContext(UserContext)
    return(
        <div>
            SIGN IN
            <form onSubmit={(e)=>{
                e.preventDefault();
                signInFb(props.fb,email,password)
                .then((user)=>{
                    // alert(user.uid);
                    setSignedIn(user)
                })
                .catch(error=>{
                    alert(error.message);
                })
            }}>
            <label>
                Email:
                <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
            <label>
                Password:
                <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            <br/>
            <input type='submit' value='Sign in!'/>
            </form>
        </div>
        
    )
    
}
export default SignInForm;