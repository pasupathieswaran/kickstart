import React from "react";
import { Link } from "react-router-dom";
function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold">Menu</div>

      <ul>
        <li>
          <Link
            to="/"
            className=" font-semibold text-red-600 py-3 block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className=" font-semibold text-red-600 block "
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/album"
            className=" font-semibold text-red-600 block pt-3"
            onClick={props.closeMenu}
          >
            Album
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
