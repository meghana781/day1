import React, { useState, useRef } from "react";

function Register() {
    const idRef = useRef(null);
    const emailRef = useRef(null);
    const branchRef = useRef(null);
    const yearRef = useRef(null);
    const [gender, setGender] = useState('Female');

    const formSubmit = (event) => {
        event.preventDefault();

        console.log(idRef.current.value);
        console.log(emailRef.current.value);
        console.log(branchRef.current.value);
        console.log(yearRef.current.value);
        console.log(gender);
        setGender('');
        idRef.current.value = '';
        emailRef.current.value = '';
        branchRef.current.value = '';
        yearRef.current.value = '';
    };

    const getGender = (e) => {
        setGender(e.target.value);
    };

    return (
        <div className="container" style={{ marginLeft: "45%", color: 'black' }}>
            <h3>Register</h3>
            <p>Provide your details to login</p>
            <form onSubmit={formSubmit}>
                <h6>College ID</h6>
                <input type="text" placeholder="College ID" ref={idRef} />
                <h6>Password</h6>
                <input type="password" placeholder="Password" />
                <h6>Email Address</h6>
                <input type="email" placeholder="Email address" ref={emailRef} />
                <h6>Branch</h6>
                <select ref={branchRef}>
                    <option value="">Select options</option>
                    <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="Mech">Mech</option>
                    <option value="EEE">EEE</option>
                </select>
                <h6>Year</h6>
                <select ref={yearRef}>
                    <option value="">Select option</option>
                    <option value="1st year">1st year</option>
                    <option value="2nd year">2nd year</option>
                    <option value="3rd year">3rd year</option>
                    <option value="4th year">4th year</option>
                </select>
                <h6>Gender</h6>
                <div>
                    <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={getGender} /> Male
                    <input style={{ marginLeft: '10px' }} type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={getGender} /> Female
                    <input style={{ marginLeft: '10px' }} type="radio" name="gender" value="Other" checked={gender === 'Other'} onChange={getGender} /> Other
                </div>
                <button type="submit">Register</button>
            </form>
            <p></p>
            <button type="text" onClick={() => window.history.back()}>Back</button>
        </div>
    );
}

export default Register;
