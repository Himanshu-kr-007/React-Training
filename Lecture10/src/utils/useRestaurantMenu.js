import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";


// Custom Hooks - Written Code in Modular Way to optimize the application
const useRestaurantMenu = (resId) => {
  // Fetch Data From API
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
