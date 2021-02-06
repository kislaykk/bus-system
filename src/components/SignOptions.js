import React from "react";
import { BrowserRouter as Router , Switch, Route,Link } from "react-router-dom";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm'; 
function SignOptions(props)
{
    return(
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/SignUp">SignUp</Link>
              </li>
              <li>
                <Link to="SignIn">SignIn</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/SignUp"><SignUpForm fb={props.fireb}/></Route>
              <Route path="/SignIn"><SignInForm fb={props.fireb}/></Route>
            </Switch>
          </div>
        </Router>
      )
}
export default SignOptions;