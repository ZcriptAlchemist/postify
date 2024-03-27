import { Link } from "react-router-dom";

const Signup = (toggleLogin) => {
  return (
    <div className="signup-container">
      <h2>Sign up</h2>
      <form className="signup-form" action="">
        <label htmlFor="signup-name">Name</label>
        <input id="signup-name" placeholder="Enter your name" type="text" />
        <label htmlFor="signup-email">Email</label>
        <input id="signup-email" placeholder="Enter your email" type="email" />
        <label htmlFor="signup-password">Set password</label>
        <input
          id="signup-password"
          placeholder="Enter your password"
          type="password"
        />
        <input
          id="signup-password"
          placeholder="Confirm your password"
          type="password"
        />
        <button action="none">sign up</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link onClick={toggleLogin} className="form-link" to="">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
