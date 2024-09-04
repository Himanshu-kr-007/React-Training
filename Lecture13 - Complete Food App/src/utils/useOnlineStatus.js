import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // Try to check if Online then return Online Status. Online Status is a Boolean
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // Boolean value
  return onlineStatus;
};

export default useOnlineStatus;
