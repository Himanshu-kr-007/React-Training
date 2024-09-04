import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // Contain Url Path
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

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
