import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });
  const host = 'https://note-backend-djwg.onrender.com';

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
     const token= localStorage.setItem('token', json.authtoken);
      console.log(token);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: '15px' , border:'none'}}>
              <div className="card-body p-5">
                {/* <h2 className="text-uppercase text-center mb-5">Create an account</h2> */}
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input type="text" id="name" onChange={onChange} name="name" className="form-control form-control-lg" required />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Your Email</label>
                    <input type="email" id="email" onChange={onChange} name="email" className="form-control form-control-lg" required />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={onChange} name="password" className="form-control form-control-lg" required />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary  btn-lg ">Register</button>
                  </div>
                  <p className="text-center text-muted mt-5 mb-0">
                    <Link to="/" className="fw-bold text-body"><u>Login here</u></Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
