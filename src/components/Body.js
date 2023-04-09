import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterDate(searchText, restaurants) {
  const filterData = restaurants.filter((restaurants) =>
    restaurants.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterDate(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurent) => {
          return (
            <RestaurantCard {...restaurent.data} key={restaurent?.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
