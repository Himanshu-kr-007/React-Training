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
    <div className="p-6">
      <h3 className="text-3xl font-bold text-center my-4">
        {resInfo.cards[0].card.card.text}
      </h3>
      <ul className="bg-white shadow-md rounded-lg p-4">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="flex justify-between items-center p-2 border-b last:border-b-0">
            <span className="text-lg">{item.card.info.name}</span>
            <span className="text-green-600 font-semibold">Rs: {item.card.info.price / 100}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
