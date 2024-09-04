import { useState, useEffect } from "react"; // Named Import
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineMessage from "./OfflineMessage";

// Body Component
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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <OfflineMessage />;

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="body text-center py-10">
        <h1 className="text-3xl font-bold mb-4">
          Delicious Food Delivered to Your Doorstep
        </h1>
        <p className="text-lg mb-6">
          Order from the best restaurants in your area
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-bar flex justify-center items-center mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded-l-md py-2 px-4 w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="What do you want to have?"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
        <button
          className="Search-button bg-indigo-500 text-white py-2 px-4 rounded-r-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

      {/* Restaurant Cards */}
      <div className="restaurant-card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
            className="w-full" // Ensures the card takes full width of the grid cell
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
