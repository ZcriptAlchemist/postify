import { Link } from "react-router-dom";

const Login = ({ toggleLogin }) => {
  return (
    <div className="login-container">
      <h2>Log in</h2>
      <form className="login-form" action="">
        <label htmlFor="login-email">Email</label>
        <input id="login-email" placeholder="Enter your email" type="email" />
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          placeholder="Enter your password"
          type="password"
        />
        <Link className="login-btn" to="/Dashboard">
          log in
        </Link>
      </form>
      <p>
        Don't have an account?{" "}
        <Link onClick={toggleLogin} className="form-link" to="">
          sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
