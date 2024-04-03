import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../images/person.png';
import email_icon from '../images/email.png';
import password_icon from '../images/password.png';

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underLine"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt=""/>
            <input type="text" placeholder="Name"className='in'/>
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt=""/>



          
          <input type="email" placeholder="Email id" />
        </div>
        <div className="input">
          <img src={password_icon} alt=""/>
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
      )}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign up</div>
        <div className={action === "Login" ? "submit" : "submit gray"} onClick={() => { setAction("Login") }}>Login</div>
      </div>
    </div>
  );
};
