import { LOGO_URL } from "../utils/constants";

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="title">
        <h2 className="title-heading">Online-Food-Service</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;