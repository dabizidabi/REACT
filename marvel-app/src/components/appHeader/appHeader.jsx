import "./appHeader.css";
import marvel_img from "../../assets/img/marvel_img.jpg";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  const links = [
    {
      name: "COMICS",
      href: "/",
    },
    {
      name: "CHARACTERS",
      href: "characters",
    },
    {
      name: "ABOUT",
      href: "about",
    },
  ];

  const activeStyle = {
    color: "tomato",
  };

  return (
    <>
      <img src={marvel_img} alt="MARVEL" className="marvel-logo" />
      <ul className="header-links">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={link.href}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AppHeader;
