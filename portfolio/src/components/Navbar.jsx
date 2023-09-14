import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div id="brand">B.S - Portfolio</div>
      <div id="nav-menu">
        <span onClick={() => setShowMenu(!showMenu)} className="mobile-menu">
          Menu
        </span>
        {/* <ul className={`${showMenu ? "active" : "hide"}`}> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Work</Link>
          </li>
          <li>
            <Link to="about">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li onClick={() => setShowMenu(false)}>
            <a href="#contact">Contact</a>
          </li> */}
          <li>
            <button className="cta-outline">Hire Me</button>
          </li>
        {/* </ul> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
