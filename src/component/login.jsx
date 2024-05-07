import React, { useState } from 'react';
import { loginuser } from '../api-helper/api-helper';
import { useDispatch } from 'react-redux';
import { userActions } from '../store';

const Login= () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch();
  const onresrecieved=(data)=>{
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId",data.data.id);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    loginuser(email,password)
    .then(onresrecieved)
    
    .catch((err)=>console.log(err));
 
    setEmail('');
    setPassword('');
  };
  
  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"  value={email} 
            onChange={(e) => setEmail(e.target.value)} 
 className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary lobtn">Submit</button>
</form>
<p>for new users Please <a href="/Signup">signup</a></p>
    </div>
  );
};

export default Login;
