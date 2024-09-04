import { CDN_URL } from "../utils/constants";

// Restaurant Card Component
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, costForTwo, cuisines, sla } = resData?.info;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-80 m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="restaurant-image">
        <img
          className="w-full h-48 object-cover"
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="Restaurant Image"
        />
      </div>
      <div className="p-4">
        <h4 className="text-xl font-semibold mb-2">{name}</h4>
        <p className="text-gray-700 mb-2">Cuisine: {cuisines.join(", ")}</p>
        <p className="text-gray-700 mb-2">Rating: {avgRating}</p>
        <p className="text-gray-700 mb-2">Duration: {sla.deliveryTime} minutes</p>
        <p className="text-gray-700 mb-2">Price: {costForTwo}</p>
        <p className="text-gray-700 mb-4">Offer: 20% off all orders above 300</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 w-full">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
