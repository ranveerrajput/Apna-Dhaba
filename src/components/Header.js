import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logged In</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Logged Off</button>
      )}
    </div>
  );
};

export default Header;
