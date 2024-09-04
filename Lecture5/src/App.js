import React from "react"; // Default Import
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import resList from "./utils/mockData";

// Import Utility Function
import { useState } from "react"; // Named Import

const AppLayout = () => {
  // UseState - It is used to create state variable
  // State Variable - It maintain the state of the component
  const [listofRestaurants, setListofRestaurant]  = useState(resList);

  return (
    <div className="app">
      <Header />
      <Body />
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
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>

      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
