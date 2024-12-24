import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSignupActive, setIsSignupActive] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const switchToSignup = (e:any) => {
    e.preventDefault();
    setIsSignupActive(true);
  };

  const switchToLogin = (e:any) => {
    e.preventDefault();
    setIsSignupActive(false);
  };

  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [checked,setChecked] = useState(false);

  const [name,setName] = useState("");
  

  const handleSubmit = (e:any) => {
    e.preventDefault();

    console.log({email,password,checked})
  }
  const handleSignupSubmit = (e:any) => {
    e.preventDefault();

    console.log({email,password,checked,name})
  }

  return (
    <div className={`container ${isSignupActive ? 'active' : ''}`}>
      <div className="forms">
        {/* Login Form */}
        {!isSignupActive && (
          <div className="form login">
            <span className="title">Login</span>
            <form action="#" onSubmit={handleSubmit}>
              <div className="input-field">
                <input type="text" placeholder="Enter your email" required 
                  onChange={(e)=>(setEmail(e.target.value))}
                  />
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  className="password"
                  placeholder="Enter your password"
                  required
                  onChange={(e)=>(setPassword(e.target.value))}
                />
                <i className="uil uil-lock icon"></i>
                <i
                  className={`uil ${isPasswordVisible ? 'uil-eye' : 'uil-eye-slash'} showHidePw`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="logCheck" onChange={(e)=>setChecked(e.target.checked)} />
                  <label className="text">Remember me</label>
                </div>
                <a href="#" className="text">Forgot password?</a>
              </div>
              <div className="input-field button">
                <input type="submit" value="Login" />
              </div>
            </form>
            <div className="login-signup">
              <span className="text">Not a member? 
                <a href="#" className="text signup-link" onClick={switchToSignup}>Signup Now</a>
              </span>
            </div>
          </div>
        )}

        {/* Signup Form */}
        {isSignupActive && (
          <div className="form signup">
            <span className="title">Registration</span>
            <form action="#" onSubmit={handleSignupSubmit}>
              <div className="input-field">
                <input type="text" placeholder="Enter your name" required 
                onChange={(e)=>setName(e.target.value)}
                />
                <i className="uil uil-user"></i>
              </div>
              <div className="input-field">
                <input type="text" placeholder="Enter your email" required 
                onChange={(e)=>setEmail(e.target.value)}
                
                />
                <i className="uil uil-envelope icon"></i>
              </div>
              <div className="input-field">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  className="password"
                  placeholder="Create a password"
                  required
                  onChange={(e)=>setPassword(e.target.value)}
                  
                />
                <i className="uil uil-lock icon"></i>
              </div>
             
              <div className="checkbox-text">
                <div className="checkbox-content">
                  <input type="checkbox" id="termCon" 
                  onChange={(e)=>setChecked(e.target.checked)}
                  />
                  <label className="text">I accepted all terms and conditions</label>
                </div>
              </div>
              <div className="input-field button">
                <input type="submit" value="Signup" />
              </div>
            </form>
            <div className="login-signup">
              <span className="text">Already a member?
                <a href="#" className="text login-link" onClick={switchToLogin}>Login Now</a>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
