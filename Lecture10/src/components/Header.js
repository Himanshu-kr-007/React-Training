import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header Component
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between border-2 border-gray-300 bg-white shadow-md">
      <div className="flex items-center">
        <div className="logo-container">
          <img className="w-16 h-16 p-1 m-3" src={LOGO_URL} alt="Logo" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">MOM'S Food</h1>
      </div>
      <div>
        <ul className="flex space-x-4 p-4 m-4 border-2 border-gray-300 rounded-lg bg-gray-50">
          <li className="flex items-center">
            Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link className="text-blue-500 hover:text-blue-700" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 hover:text-blue-700" to="/About">
              About
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 hover:text-blue-700" to="/Contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 hover:text-blue-700" to="/Grocery">
              Grocery
            </Link>
          </li>
          <li>
            <button
              className="bg-blue-500 text-white px-4  rounded hover:bg-blue-700 transition duration-300"
              onClick={() => {
                setbtnNameReact((prevState) =>
                  prevState === "Login" ? "Logout" : "Login"
                );
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
