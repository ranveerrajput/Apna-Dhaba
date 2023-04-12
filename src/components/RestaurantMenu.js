import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5868397&lng=73.68599499999999&restaurantId=" +
        resId +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>his is hoyel of id: {resId}</h1>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.name}</h3>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt="restaurant"
        />
        {console.log(restaurant?.cards[0]?.card?.card?.info?.name)}
      </div>
      <div>
        <h1>Menu</h1>
        {console.log(
          restaurant?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]
            ?.card?.card.itemCards
        )}
        ;
        {
          <ul>
            {Object.values(
              restaurant?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]
                ?.card?.card.itemCards
            ).map((item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default RestaurantMenu;
