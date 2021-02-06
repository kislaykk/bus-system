import React from 'react';
const {register}=require('../controllers/register')
class SignUpForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {email:'',name:'',password:''}
        this.nameChangeHandler=this.nameChangeHandler.bind(this);
        this.emailChangeHandler=this.emailChangeHandler.bind(this);
        this.passwordChangeHandler=this.passwordChangeHandler.bind(this);
        this.register=this.register.bind(this);
    }
    nameChangeHandler(event)
    {
        this.setState({name:event.target.value})
    }
    emailChangeHandler(event)
    {
        this.setState({email:event.target.value})
    }
    passwordChangeHandler(event)
    {
        this.setState({password:event.target.value})
    }
    register(event)
    {
        event.preventDefault();
        let message="";
        let name=this.state.name;
        let email=this.state.email;
        let password=this.state.password;
        if(name.trim().length===0) message+="\nplease enter a name";
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.trim()))) message+="\nenter a valid email Id";
        if(password.trim().length<8) message+="\npassword should be of atleast 8 characters";
        // if the sign up succeeds then clear up the fields
        // if sign up did'nt succed due to validation of the fields show them what is missing but dont clear the fields
        //if signup failed due to some other reason show that message
        if (!message)
        {
            register(this.props.fb,name,email,password)
            .then(()=>{
                this.setState({name:'',email:'',password:''})
                alert('signed up, you can log in now')
            })
            .catch(err=>{
                alert(err.message)
                console.log(err)
            })
        }
        else{
            alert(message);
        }
    }
    render()
    {
        return(
            <div>
                SIGN UP
                <form onSubmit={this.register}>
                <label>
                    Name:
                    <input type='text' value={this.state.name} onChange={this.nameChangeHandler}/>
                </label>
                <label>
                    Email:
                    <input type='email' value={this.state.email} onChange={this.emailChangeHandler}/>
                </label>
                <label>
                    Password:
                    <input type='password' value={this.state.password} onChange={this.passwordChangeHandler}/>
                </label>
                <br/>
                <input type='submit' value='Sign Up!'/>
                </form>
            </div>
            
        )
    }
}

export default SignUpForm;
