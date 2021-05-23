import React from "react";
import navStyles from "./Navbar.module.css";
import Friends from "./Friends/Friends";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <aside className={navStyles.aside}>
      <nav className={navStyles.navAside}>
        <NavLink
          to="/profile"
          className={navStyles.nav_link}
          activeClassName={navStyles.active}
        >
          <div
            className={navStyles.navItem}
            activeClassName={navStyles.active}
            id={navStyles.firstItem}
          >
            Profile
          </div>
        </NavLink>
        <NavLink
          to="/dialogs"
          className={navStyles.nav_link}
          activeClassName={navStyles.active}
        >
          <div className={navStyles.navItem}>Messages</div>
        </NavLink>
        <NavLink
          to="/news"
          className={navStyles.nav_link}
          activeClassName={navStyles.active}
        >
          <div className={navStyles.navItem}>News</div>
        </NavLink>
        <NavLink
          to="/music"
          className={navStyles.nav_link}
          activeClassName={navStyles.active}
        >
          <div className={navStyles.navItem}>Music</div>
        </NavLink>
        <NavLink
          to="/settings"
          className={navStyles.nav_link}
          activeClassName={navStyles.active}
        >
          <div className={navStyles.navItem}>Settings</div>
        </NavLink>
      </nav>
      <div className={navStyles.friends}>FRIENDS</div>
      <div className={navStyles.friends_wrapper}>
        {props.friends.map((friend) => {
          return <Friends avatar={friend.avatar} name={friend.friendName} />;
        })}
      </div>
    </aside>
  );
};

export default Navbar;
