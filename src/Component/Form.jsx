import React, { useState } from 'react'
import "./Style.css"
import fbIcon from "../assets/facebook.png"
import githubIcon from "../assets/github.png"
import igIcon from "../assets/instagram.png"
import linkedinIcon from "../assets/linkedin.png"



const Form = () => {

const [heading,setHeading] =useState("SignIn");
const [btnChange,setChange] =useState("Sign-In");
  return (
    <div className="container">
        <form action="#" name='signIn-form' >
            <h1>{heading}</h1>
            {btnChange==="Sign-In"?"": <input type="text" placeholder='Email' id='email' autoComplete='email'/>}
            <input type="text" placeholder='Username' id='name' autoComplete='username'/>
            <input type="password" placeholder='Enter your password' id='password' autoComplete='current-password'/>

            <button>{btnChange}</button>
        </form>
        <div className="side">
          <p>
            {btnChange==="Sign-In"& heading==="SignIn"?"Welcome back! Sign In to access your personalized dashboard.":"Sign Up and take control of your future."}
          </p>  
            <div className="btn">
                <button onClick={()=>{setHeading("SignIn");setChange("Sign-In")}}>Sign-In</button>
                <button onClick={()=>{setHeading("Create new account");setChange("Sign-Up")}}>Sign-Up</button>
            </div>
            
            <div className="social-media">
              <img src={fbIcon} />
              <img src={githubIcon} />
              <img src={igIcon} />
              <img src={linkedinIcon} />
            </div>
        </div>   
    </div>
  )
}

export default Form;