
import React, { useContext } from 'react'
import BannerImage from '../assets/home1.jpg'
import '../styles/Signin.css'
import { useState } from 'react'
import { AuthContext } from './AuthContext'
import { Link } from 'react-router-dom'
    const Signin = (props) => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const authContext = useContext(AuthContext);
        const handleSubmit = (e) => {
            e.preventDefault();
            authContext.register({name, email, password})
            console.log({ name, email, password });
            console.log(authContext)
        };


  return (
    <div className='contact'>
       <div className='leftSide' style={{backgroundImage:'url('+BannerImage+')'}} ></div>
       <div className='rightSide'>
       <h1>Register</h1>

<form onSubmit={handleSubmit} id="contact-form" method="POST">
 <label htmlFor="name">Full Name</label>
 <input 
 onChange={(e) => setName(e.target.value)}
 value={name}
 
 name="name"
 placeholder="Enter full name..." 
 type="text" />


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
  placeholder="Enter password" 
  type="text" />


 <button type="submit">Envoyer</button>  <p> OR </p> <Link to="/signup"  > Signup </Link> 
</form>

            </div>
    </div>
  )
} 

export default Signin