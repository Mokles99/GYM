import React, { useContext } from 'react'
import BannerImage from '../assets/home1.jpg'
import '../styles/Signin.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthContext'



    const Signup = (props) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
       
        const authContext = useContext(AuthContext);
        const handleSubmit = (e) => {
          e.preventDefault();
          authContext.login({email, password})
          console.log({ email, password });
        };
      
  return (
    <div className='contact'>
       <div className='leftSide' style={{backgroundImage:'url('+BannerImage+')'}} ></div>
       <div className='rightSide'>
       <h1>Sign</h1>

<form onSubmit={handleSubmit}  id="contact-form" method="POST">

 <label htmlFor="email">Email</label>
 <input 
 onChange={(e) => setEmail(e.target.value)}
 value={email}
 name="email" 
 placeholder="Enter email..." 
 type="email" />



 <label htmlFor="password">Password</label>
 <input 
 onChange={(e) => setPassword(e.target.value)}
 value={password}
 name="password" 
 placeholder="Enter pass..." 
 type="text" />


 <button type="submit">login</button> <p> OR </p> <Link to="/sign"  > Signin </Link>
</form>

            </div>
    </div>
  )
} 

export default Signup