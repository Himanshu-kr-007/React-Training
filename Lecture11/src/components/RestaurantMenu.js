import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // Contain Url Path
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  // Show shimmer while loading data
  if (resInfo === null) return <Shimmer />;

  // Extract categories from restaurant info
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="p-6">
      <h3 className="text-3xl font-bold text-center my-4">
        {resInfo.cards[0].card.card.text}
      </h3>
      <ul className="bg-white shadow-md rounded-lg p-4">
        {categories && categories.length > 0 ? (
          categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card.title} 
              data={category?.card?.card} 
              showItems={index === showIndex} // Simplified boolean condition
              setShowIndex={() => setShowIndex(showIndex === index ? null : index)} // Toggle logic
            />
          ))
        ) : (
          <li>No categories available.</li> // Handle empty categories
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
