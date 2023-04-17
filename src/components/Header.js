import { useState, useContext } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img className="h-20" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-yellow-400 drop-shadow-2xl">
      <Title />
      <div className="">
        <ul className="flex  py-7 ">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      {user.name}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logged In</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Logged Off</button>
      )}
    </div>
  );
};

export default Header;
