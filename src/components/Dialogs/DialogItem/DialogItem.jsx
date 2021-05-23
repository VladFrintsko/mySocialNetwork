import React from "react";
import dialogStyles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div>
      <NavLink
        to={`/dialogs${props.path}`}
        activeClassName={dialogStyles.active}
        className={dialogStyles.nav_link}
      >
        <div className={dialogStyles.dialog_wrapper}>
          <div className={dialogStyles.avatar_wrapper}>
            <img src={props.avatar} alt={`${props.name} avatar`}></img>
          </div>
          <div className={dialogStyles.dialog_name}>{props.name}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
