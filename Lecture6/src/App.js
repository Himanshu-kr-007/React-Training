import React from "react"; // Default Import
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer";

import { useState, useEffect } from "react"; // Named Import

const AppLayout = () => {
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.10823357762746&lng=72.88370222697208&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  };

  // Conditional Rendering
  // if (listofRestaurants.length === 0) {
  //   return (
  //     <>
  //       <Header /> 
  //       <Body /> 
  //       <Shimmer />
  //     </>
  //   );
  // }
 
  return listofRestaurants.length === 0 ? <> <Header /><Body /><Shimmer /></>  : (
    <div className="app">
      <Header />
      <Body />
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
            const filteredRestaurant =  listofRestaurants.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
