import React from "react";
import "../../libraries/bootstrap.min.css";
import settingStyles from "./Settings.module.css";
import { NavLink } from "react-router-dom";

const Settings = (props) => {
  const logOut = () => {
    props.flag(false);
    localStorage.removeItem('userData');
  }
  console.log(props);
  return (
    <div>
      <h1>Settings</h1>
      <div className={settingStyles.registration}>
        <NavLink to='/news'>
        <button type="button" className="btn btn-outline-dark" onClick={logOut}>
          Log out
        </button>
        </NavLink>
        
      </div>
    </div>
  );
};

export default Settings;
