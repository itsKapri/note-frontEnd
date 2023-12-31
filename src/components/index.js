<div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                    <div className="card-body p-5">
                        {/* <h2 className="text-uppercase text-center mb-5">Create an account</h2> */}
                        <form onSubmit={handleSubmit} >
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">Email address</label>
                                <input type="email" id="email" value={credentials.email} onChange={onChange} name="email" className="form-control form-control-lg" required />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">Register</button>
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