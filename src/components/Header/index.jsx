import "./style.css";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="header">
      <div className="leftSide">
        <div className="logo">
          <img src="/assets/logo.png" alt="logo" />
        </div>
        <div className="tabs">
          <div
            className={`tab ${location.pathname === "/" && "active"}`}
            onClick={() => handleRedirect("/")}
          >
            Home
          </div>
          <div
            className={`tab ${location.pathname === "/about-us" && "active"}`}
            onClick={() => handleRedirect("/about-us")}
          >
            About Us
          </div>
          <div
            className={`tab ${location.pathname === "/contact" && "active"}`}
            onClick={() => handleRedirect("/contact")}
          >
            Contact
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="search">
          <input className="input" />
        </div>
        <div className="cart" onClick={()=>handleRedirect('/cart')}>
          <img src="/assets/cart.png" alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
