import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // Contain Url Path
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="Menu">
      <h3>{resInfo.cards[0].card.card.text}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="Menu-items">
            {item.card.info.name}{" "}
            <span className="price">Rs:{item.card.info.price / 100}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
