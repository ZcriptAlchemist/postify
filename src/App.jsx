import { Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Link className="logo" to="/">
        Postify
      </Link>
      <Home />
      {/* <Link to="/Dashboard">dashboard</Link>
      <Link to="/Login">log in</Link>
      <Link to="/Signup">sign up</Link> */}
    </div>
  );
}

export default App;
