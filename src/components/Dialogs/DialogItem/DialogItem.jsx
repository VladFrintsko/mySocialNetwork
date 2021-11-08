import React from "react";
import dialogStyles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const {path, avatar, name} = props;
  return (
    <div>
      <NavLink
        to={`/dialogs${path}`}
        activeClassName={dialogStyles.active}
        className={dialogStyles.nav_link}
      >
        <div className={dialogStyles.dialog_wrapper}>
          <div className={dialogStyles.avatar_wrapper}>
            <img src={avatar} alt={`${name} avatar`}></img>
          </div>
          <div className={dialogStyles.dialog_name}>{name}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
