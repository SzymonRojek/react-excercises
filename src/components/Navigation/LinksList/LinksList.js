import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TheatersIcon from "@mui/icons-material/Theaters";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { v4 as uuidv4 } from "uuid";

import { useViewport } from "../../../hooks/useViewport";

import "./styles.css";

const LinksList = ({ toggleDrawer }) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const { width } = useViewport();
  const WIDTH_VALUE = 1024;
  const isMobile = width < WIDTH_VALUE;

  const linksMenu = [
    { icon: <HomeIcon />, class: "", label: isMobile ? "" : "home", to: "/" },
    {
      icon: <TheatersIcon />,
      class: "movies",
      label: isMobile ? "" : "movies",
      to: "/movies",
    },
    {
      icon: <ApartmentIcon />,
      class: "places",
      label: isMobile ? "" : "places",
      to: "/places",
    },
  ];

  return (
    <ul
      className={`${isMobile ? "header-list-mobile" : "header-list-desktop"}`}
    >
      {linksMenu.map((link) => (
        <li
          className={`header-link ${
            splitLocation[1] === link.class ? "active" : ""
          }`}
          key={`list-item${uuidv4()}`}
        >
          <NavLink to={link.to} className="link" onClick={toggleDrawer}>
            {link.icon} {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default LinksList;
