import React from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
    return (
        <div className="from-container">
            <div>
                <h2 className="from-title">Login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type='email' name="email" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type='password' name="password" id=" required"></input>
                    </div>
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