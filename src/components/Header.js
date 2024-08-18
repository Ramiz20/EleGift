import "./Style/Style.css";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { useState } from "react";

function Heaer() {
  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => setOpenMenu(!openMenu);
  return (
    <>
      <header>
        <div className="left-side">
          <img src="./Picture/GiftIcon.png" />
          <h1>
            Ele
            <b>Gift</b>
          </h1>
        </div>
        <div className="center-side">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="right-side">
          <button>Sign up Free</button>
        </div>
        <a onClick={showMenu} className="menu-icon">
          {openMenu ? <FaX /> : <FaBarsStaggered />}
        </a>
        <nav style={{
          height: openMenu ? "281px" : "0px",
        }}>



          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>

        </nav>
      </header>
    </>
  );
}

export default Heaer;
