import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
   const host = "https://note-backend-djwg.onrender.com"

    let Navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            Navigate("/");   
        } else {
            alert("Incorrect password. Please try again");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
<div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' , border:'none'}}>
                    <div className="card-body p-5">
                        <form onSubmit={handleSubmit} >
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input type="email" id="email" value={credentials.email} onChange={onChange} name="email" className="form-control form-control-lg" required />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input type="password" className="form-control form-control-lg" value={credentials.password} onChange={onChange} name="password" id="password" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary  btn-lg">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login