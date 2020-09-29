import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../../redux/reducer';

class Login extends Component {

constructor(props) {
super(props);

this.state = {

};
}

render() {
let{isLoginSuccess,loginError} = this.props
return (
<div className="auth-wrapper" onSubmit={this.onSubmit}>
<div className="auth-inner">
<form name="Loginform">

<h3>Login</h3>

<div className="form-group">
<label>Email address</label>
<input type="email" className="form-control" name="email" placeholder="Enter email" onChange={e => this.setState({email:e.target.value})}/>
</div>

<div className="form-group">
<label>Password</label>
<input type="password" className="form-control" name="password" placeholder="Enter password" onChange={e => this.setState({password:e.target.value})} />
</div>


<button type="submit" className="btn btn-primary btn-block">Submit</button>

{isLoginSuccess && <div>{this.props.history.push("/Homescreen")}</div>}
{loginError && <div>Entered Email or Password is Incorrect</div>}

</form>
</div>
</div>
)
}
onSubmit = (e) => {
e.preventDefault();

let {email,password} = this.state
this.props.login(email,password);
}
}



const mapStateToProps = (state) =>{
return{
isLoginSuccess:state.isLoginSuccess,
loginError:state.loginError

};
}

const mapDispatchToProps = (dispatch) =>{
return{
login:(email,password) => dispatch(login(email,password))

};
}

export default connect(mapStateToProps,mapDispatchToProps) (Login);