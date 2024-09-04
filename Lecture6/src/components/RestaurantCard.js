import { CDN_URL } from "../utils/constants";

// Restaurant Card Component
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, costForTwo, cuisines, sla } = resData?.info;
  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
          alt="Restaurant Image"
        />
      </div>
      <div className="restaurant-details">
        <h4 className="restaurant-card-text">Name: {name}</h4>
        <p className="restaurant-card-text">Cuisine:{cuisines.join(", ")}</p>
        <p className="restaurant-card-text">Rating: {avgRating}</p>
        <p className="restaurant-card-text">
          Duration: {sla.deliveryTime} minutes
        </p>
        <p className="restaurant-card-text">Price: {costForTwo}</p>
        <p className="restaurant-card-text">
          Offer: 20% off All orders above 300
        </p>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
