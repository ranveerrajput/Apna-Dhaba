import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterDate(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurants) =>
    restaurants?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurnats();
  }, []);

  async function getRestaurnats() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json.data.cards[2].data.data.cards);
    setFilterRestaurants(json.data.cards[2].data.data.cards);
  }

  console.log("This is render");
  //This is known as Early return
  if (!allRestaurants.length) return null;

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterDate(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurants.length == 0
          ? Shimmer()
          : filterRestaurants.map((restaurent) => {
              return (
                <RestaurantCard
                  {...restaurent.data}
                  key={restaurent?.data?.id}
                />
              );
            })}
      </div>
    </>
  );
};

export default Body;
