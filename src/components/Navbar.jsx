import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);

  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle"></div>
          <div className="mode">
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>

      <div className="links-container">
        <ul className="links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Launch</a>
          </li>
          <li>
            <a href="#">Sing Up</a>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
