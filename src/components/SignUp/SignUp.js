import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {

    const [signInWithGoogle, gmailUser, gmailLoading, gmailError] = useSignInWithGoogle(auth);

    const [email, setEmail]  = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e =>{
        setConfirmPassword(e.target.value);
    }
    if (gmailError) {
        return (
          <div>
            <p style={{color: 'red'}}>Error: {error?.message} {gmailError.message}</p>
          </div>
        );
      }


    if(user || gmailUser){
        navigate('/shop');
    }
    const handleCreateUser = e =>{
        e.preventDefault();
        if(password !== confirmPassword){
            setError("Password didn't match");
            return;
            
        }
        if(password.length <6){
            setError("password must be 6 characters or longer")
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return(
        <div className="from-container">
            <div>
                <h2 className="from-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
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
                        <input onBlur={handlePasswordBlur} type='password' name="password" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input onBlur={handleConfirmPasswordBlur} type='password' name="confirm-password" id="" required></input>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className="from-submit" type='submit' value='Sign Up'></input>
                </form>
                <p className="link"><small>Already have an account? <Link className="from-link" to='/login'>Login</Link></small></p>
                <div className="or">
                    <div></div>
                    <p>Or</p>
                    <div></div>
                </div>
                <button onClick={()=>signInWithGoogle()} className="btn"><div className="btn-list"><img className="image" src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1"></img><p>Continue with Google</p></div></button>
            </div>
        </div>
    );
};

export default SignUp;