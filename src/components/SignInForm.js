import React from 'react';
let {signInFb} =require('../controllers/signInFb');
class SignInForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {email:'',password:''}
        this.emailChangeHandler=this.emailChangeHandler.bind(this);
        this.passwordChangeHandler=this.passwordChangeHandler.bind(this);
        this.signIn=this.signIn.bind(this);
        
    }
    emailChangeHandler(event)
    {
        this.setState({email:event.target.value})
    }
    passwordChangeHandler(event)
    {
        this.setState({password:event.target.value})
    }
    signIn(event)
    {
        event.preventDefault();
        let email=this.state.email;
        let password=this.state.password;
        signInFb(this.props.fb,email,password);

    }
    render()
    {
        return(
            <div>
                SIGN IN
                <form onSubmit={this.signIn}>
                <label>
                    Email:
                    <input type='email' value={this.state.email} onChange={this.emailChangeHandler}/>
                </label>
                <label>
                    Password:
                    <input type='password' value={this.state.password} onChange={this.passwordChangeHandler}/>
                </label>
                <br/>
                <input type='submit' value='Sign in!'/>
                </form>
            </div>
            
        )
    }
}
export default SignInForm;