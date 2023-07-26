import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="container-fluid">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-primary text-decoration-none fw-bold fs-2">
        Notes
      </Link>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 link-dark">Home</Link></li>
        <li><Link to="/about" className="nav-link px-2 link-dark">About</Link></li>
      </ul>
  
      {/* <div className="col-md-3 text-end">
        <Link to="/singup" type="button" className="btn btn-outline-primary me-2">Sing Up</Link>
        <Link to="/login" type="button" className="btn btn-primary">Sign In</Link>
      </div> */}
        {!localStorage.getItem("token") ? (
          <div className="col-md-3 text-end">
            <Link className="btn btn-primary me-2" to="/login" role="button">
            Sign in
            </Link>
            <Link className="btn btn-outline-primary" to="/signup" role="button">
              Sign up
            </Link>
          </div>
        ) : (
          <div className="col-md-3 text-end">
          <button onClick={handleClick} className="btn btn-primary">
            Log out
          </button>
          </div>
        )}
    </header>
  </div>
  )
}

export default Navbar