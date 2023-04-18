import { IMG_CDN_URL } from "../config";

const FoodItem = ({ imageId, name, price, description }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-md">
      <img src={IMG_CDN_URL + imageId} alt="Burger" />
      <h2 className="font-bold text-xl">{name}</h2>

      <h4>Rupees : {price / 100}</h4>
      <h5>{description}</h5>
    </div>
  );
};

export default FoodItem;
