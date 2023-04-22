import { useState, useContext } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import store from "../utils/store";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="h-20" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
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
          <Link to="/cart">
            {" "}
            <li className="px-2" data-testid="cart">
              Cart-{cartItems.length} Items
            </li>
          </Link>
        </ul>
      </div>
      <h2 data-testid="online-status">{isLoggedIn ? "✅" : "❌"}</h2>
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
