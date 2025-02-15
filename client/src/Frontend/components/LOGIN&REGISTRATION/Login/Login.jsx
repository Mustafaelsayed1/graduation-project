import React from "react";
import "../../styles/login.css"; // Adjust the path as needed
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../../../hooks/useLogin";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    errorMessage,
    successMessage,
    isLoading,
    handleLogin,
  } = useLogin();

  return (<>
  
  
  
  
  

      <div className="container  px-2 rounded-5">
<h2 className="h2 text-center">Login</h2>
        <div className="row w-100">
          <div className='col-12  mb-3'>
           <div>

           <div className=" bg-secondary p-3 rounded-5">
        
        <form onSubmit={handleLogin}>
          <div className="field">
            <div >
              <label className="text-black" htmlFor="email">Email:</label>
              <input
              className="form-control"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field password-container">
            <div>
              <label className="text-black" htmlFor="password">Password:</label>
              <input
              className="form-control"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                ></i>
              </button>
            </div>
          </div>
          {errorMessage && <div className="error">{errorMessage}</div>}
          {successMessage && <div className="success">{successMessage}</div>}
          <button className="left_btn" type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
            
          </button>
        </form>
      </div>



           </div>


          
          </div>
          <div className="col-12">

<div>
<div className="right-login rounded-5">
<h1>Don't have an account?</h1>
<Link to="/signup">
<button className="right_btn" type="button" disabled={isLoading}>
  Signup
</button>
</Link>
</div>

</div>
</div>
            </div>
          </div>
    
      </>
  
  );
};

export default Login;
