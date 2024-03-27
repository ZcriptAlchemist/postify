import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="tool-bar">
        <Link className="logo" to="/">
          Postify
        </Link>
        <form className="tool-bar-form" action="">
          <input
            id="login-email"
            placeholder="what's on your mind"
            type="text"
          />
          <button>add post</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
