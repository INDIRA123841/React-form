import React, { useState } from 'react'
import "./Style.css"


const Form = () => {

const [heading,setHeading] =useState("Sign-In");
const [btnChange,setChange] =useState("SignIn")
  return (
    <div className="container">
        <form action="">
            <h1>{heading}</h1>
            {btnChange==="Sign-In"?"": <input type="text" placeholder='Email'/>}
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Enter your password'/>

            <button>{btnChange}</button>
        </form>
        <div className="side">
          <p>
            {btnChange==="Sign-In"?"Welcome back! Sign In to access your personalized dashboard.":"Sign Up and take control of your future."}
          </p>  
            <div className="btn">
                <button onClick={()=>{setHeading("SignIn");setChange("Sign-In")}}>Sign-In</button>
                <button onClick={()=>{setHeading("Create new account");setChange("Sign-Up")}}>Sign-Up</button>
            </div>
            
            
        </div>   
    </div>
  )
}

export default Form;