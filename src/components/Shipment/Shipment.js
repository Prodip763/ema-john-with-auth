import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () =>{
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail]  = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = e =>{
        setName(e.target.value);
    }
    const handleAddressBlur = e =>{
        setAddress(e.target.value);
    }
    const handlePhoneBlur = e =>{
        setPhone(e.target.value);
    }

    const handleCreateUser = e =>{
        e.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    return(
        <div className="from-container">
            <div>
                <h2 className="from-title">Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">
                            Your Name
                        </label>
                        <input onBlur={handleNameBlur} type='text' name="name" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">
                            Your Email Address
                        </label>
                        <input value={user?.email} readOnly type='email' name="email" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="Address">
                            Address
                        </label>
                        <input onBlur={handleAddressBlur} type='text' name="address" id="" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">
                            Phone
                        </label>
                        <input onBlur={handlePhoneBlur} type='text' name="phone" id="" required></input>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className="from-submit" type='submit' value='Add Shipping'></input>
                </form>
            </div>
        </div>
    );
};

export default Shipment;