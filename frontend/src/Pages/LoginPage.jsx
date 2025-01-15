import React from "react";
import "../Styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="container">
      <h1>My Account</h1>
      <div className="form-wrapper">
        {/* Login Section */}
        <div className="form-section">
          <h2>Login</h2>
          <form>
            <label htmlFor="username-login">
              Username or email address <span>*</span>
            </label>
            <input type="text" id="username-login" required />

            <label htmlFor="password-login">
              Password <span>*</span>
            </label>
            <input type="password" id="password-login" required />

            <div className="form-actions">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <button type="submit" className="btn">
                Log In
              </button>
            </div>
            <a href="#" className="forgot-password">
              Lost your password?
            </a>
          </form>
        </div>

        {/* Register Section */}
        <div className="form-section">
          <h2>Register</h2>
          <form>
            <label htmlFor="username-register">
              Username <span>*</span>
            </label>
            <input type="text" id="username-register" required />

            <label htmlFor="email-register">
              Email address <span>*</span>
            </label>
            <input type="email" id="email-register" required />

            <p>
              A link to set a new password will be sent to your email address.
            </p>
            <button type="submit" className="btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
