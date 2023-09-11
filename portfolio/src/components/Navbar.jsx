import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div id="brand">My portfolio</div>
      <div id="nav-menu">
        <span onClick={() => setShowMenu(!showMenu)} className="mobile-menu">
          Menu
        </span>
        <ul className={`${showMenu ? "active" : "hide"}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="projects">Work</Link>
          </li>
          <li>
            <Link to="about">About Me</Link>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button className="cta-outline">Hire Me</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
