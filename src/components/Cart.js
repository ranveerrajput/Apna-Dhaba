import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold">This is the cart</h1>
      <button
        className="bg-green-300 p-2 m-2"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {" "}
        {cartItems.map((cartItem) => (
          <FoodItem {...cartItem?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default cart;
