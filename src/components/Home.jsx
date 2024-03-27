import Lottie from "lottie-react";
import homeAnimation from "./assets/home-animation.json";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";

const Home = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleLogin = () => setShowLogin(!showLogin);

  return (
    <div className="home">
      <Lottie className="home-animation" animationData={homeAnimation} />
      {/* <Login /> */}
      {showLogin ? (
        <Login toggleLogin={toggleLogin} />
      ) : (
        <Signup toggleLogin={toggleLogin} />
      )}
    </div>
  );
};

export default Home;
