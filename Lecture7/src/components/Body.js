import { useState, useEffect } from "react"; // Named Import
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// Body Componenet
const Body = () => {
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listofRestaurants.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <div>
      <div className="body">
        <h1 className="heropage-heading">
          Delicious Food Delivered to Your Doorstep
        </h1>
        <p className="heropage-para">
          Order from the best restaurants in your area
        </p>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="What do you want to have?"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="Search-button"
          onClick={() => {
            console.log(searchText);
            const filteredRestaurant = listofRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurant);
          }}
        >
          🔍
        </button>
      </div>
      <div className="top-rated-restaurant">
        <button
          className="top-rated-restaurant-button"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setListofRestaurant(filteredList);
            console.log(listofRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-card-container">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id}  to={"restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
