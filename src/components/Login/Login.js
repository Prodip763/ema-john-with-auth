import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link,useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const navigate =useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur= e =>{
        setEmail(e.target.value);
    }
    const handlePasswordBlur= e =>{
        setPassword(e.target.value);
    }
    if(user){
        navigate(from, {replace: true});
    }
    const hanleUserSignIn = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className="from-container">
            <div>
                <h2 className="from-title">Login</h2>
                <form onSubmit={hanleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input onBlur={handleEmailBlur} type='email' name="email" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input onBlur={handlePasswordBlur} type='password' name="password" id=" required"></input>
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className="from-submit" type='submit' value='Login'></input>
                </form>
                <p className="link"><small>New to Ema-John? <Link className="from-link" to='/signup'>Create an account</Link></small></p>
                <div className="or">
                    <div></div>
                    <p>Or</p>
                    <div></div>
                </div>
                <button className="btn"><div className="btn-list"><img className="image" src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1"></img><p>Continue with Google</p></div></button>
            </div>
        </div>
    );
};

export default Login;