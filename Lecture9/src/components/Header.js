import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header Component
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="title">
        <h2 className="title-heading">Online-Food-Service</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li> Status: {onlineStatus ? "🟢" : "🔴"} </li>
          <li> <Link to="/"> Home </Link></li>
          <li> <Link to="/About"> About </Link></li>
          <li> <Link to="/Contact"> Contact Us </Link></li>
          <li> <Link to="/Grocery">Grocery </Link></li>
          
          <li>
            <button
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
                console.log(btnNameReact);
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
