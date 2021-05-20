import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import  {ToggleContext}  from "../../Context/toggle";

export const Sidebar = (props) => {
  const {showNav, setShowNav} = useContext(ToggleContext);

  AOS.init();
  return (
    <>
        {showNav ? (
          <div
            className="sidenav animate__animated animate__slideInLeft"
            id="navbarTogglerDemo01"
          >
            <button onClick={() => setShowNav(false)} className="close-menu">
              <MdClose />
            </button>
            <ul className={"list-unstyled mt-3 text-white"}>
              <li className="p-0" onClick={() => setShowNav(false)}>
                <NavLink
                  activeClassName={"activeNavLink"}
                  className={"pl-2 py-2 w-100 d-flex mb-1"}
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="p-0" onClick={() => setShowNav(false)}>
                <NavLink
                  activeClassName={"activeNavLink"}
                  className={"pl-2 py-2 w-100 d-flex mb-1"}
                  to="/adminhome"
                >
                  Homescreen
                </NavLink>
              </li>
              <li className="p-0" onClick={() => setShowNav(false)}>
                <NavLink
                  activeClassName={"activeNavLink"}
                  className={"pl-2 py-2 w-100 d-flex mb-1"}
                  to="/adminProjects"
                >
                  Projects
                </NavLink>
              </li>
              <li className="p-0" onClick={() => setShowNav(false)}>
                <NavLink
                  activeClassName={"activeNavLink"}
                  className={"pl-2 py-2 w-100 d-flex mb-1"}
                  to="/talents"
                >
                  Talents
                </NavLink>
              </li>
              <li className="p-0" onClick={() => setShowNav(false)}>
                <NavLink
                  activeClassName={"activeNavLink"}
                  className={"pl-2 py-2 w-100 d-flex mb-1"}
                  to="/clients"
                >
                  Clients
                </NavLink>
              </li>
              <li className="p-0" onClick={() => setShowNav(false)}>
                <NavLink
                  activeClassName={"activeNavLink"}
                  className={"pl-2 py-2 w-100 d-flex mb-1"}
                  to="/adminblog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="p-0" onClick={() => setShowNav(false)}>
                <NavLink
                  activeClassName={"activeNavLink"}
                  className={"pl-2 py-2 w-100 d-flex mb-1"}
                  to="/messages"
                >
                  Messages
                </NavLink>
              </li>
            </ul>
          </div>
        ) : null}
    </>
  );
};
