import React, { useState } from 'react';
  import { signup } from '../api-helper/api-helper';
//import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    try {
        // const response = await axios.post(`http://localhost:3000/user`, {
        //   name: name,
        //   email: email,
        //   password: password
        // });
        // console.log('Response:', response.data);
        // Reset form fields after successful submission
         signup(name,email,password).then((data)=>console.log(data)).catch((err)=>console.log(err));
        setName('');
        setEmail('');
        setPassword('');
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
  };

  return (
    <div className='login'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text"  value={name} 
            onChange={(e) => setName(e.target.value)} 
 className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
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
    </div>
  );
};

export default Signup;
