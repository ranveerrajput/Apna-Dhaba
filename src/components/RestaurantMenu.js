import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
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

      <div className="flex">
        <h1>Menu</h1>
        {console.log(
          restaurant?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]
            ?.card?.card.itemCards
        )}

        {
          <ul>
            {Object.values(
              restaurant?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]
                ?.card?.card.itemCards
            ).map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name}{" "}
                <button
                  className="p-2 m-2 bg-green-300"
                  onClick={() => addFoodItem(item)}
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default RestaurantMenu;
