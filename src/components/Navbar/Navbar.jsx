import React from "react";
import navStyles from "./Navbar.module.css";
import Friends from "./Friends/Friends";
import { NavLink } from "react-router-dom";

const Navbar = ({icons, friends}) => {
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
            <div style={{ display: "flex" }}>
              <div style={{ width: "20px" }}>
                <img className={navStyles.icon}
                  style={{ width: "100%" }}
                  src={icons.icons.profile}
                />
              </div>
              <div style={{ marginLeft: "10px" }}>Profile</div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/dialogs"
          className={navStyles.nav_link}
          activeClassName={navStyles.active}
        >
          <div className={navStyles.navItem}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "20px" }}>
                <img className={navStyles.icon}
                  style={{ width: "100%" }}
                  src={icons.icons.message}
                />
              </div>
              <div style={{ marginLeft: "10px" }}>Messages</div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/news"
          className={navStyles.nav_link}
          activeClassName={navStyles.active}
        >
          <div className={navStyles.navItem}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "20px" }}>
                <img  className={navStyles.icon} style={{ width: "100%" }} src={icons.icons.news} />
              </div>
              <div style={{ marginLeft: "10px" }}>News</div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/music"
          className={navStyles.nav_link}
          activeClassName={navStyles.active}
        >
          <div className={navStyles.navItem}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "20px" }}>
                <img className={navStyles.icon} style={{ width: "100%" }} src={icons.icons.music} />
              </div>
              <div style={{ marginLeft: "10px" }}>Music</div>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/settings"
          className={navStyles.nav_link}
          activeClassName={navStyles.active}
        >
          <div className={navStyles.navItem}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "20px" }}>
                <img className={navStyles.icon}
                  style={{ width: "100%" }}
                  src={icons.icons.setting}
                />
              </div>
              <div style={{ marginLeft: "10px" }}>Settings</div>
            </div>
          </div>
        </NavLink>
      </nav>
      <div className={navStyles.friends}>FRIENDS</div>
      <div className={navStyles.friends_wrapper}>
        {friends.map((friend) => {
          return <Friends avatar={friend.avatar} name={friend.friendName} />;
        })}
      </div>
    </aside>
  );
};

export default Navbar;