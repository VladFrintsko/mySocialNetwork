import React from "react";
import "../../libraries/bootstrap.min.css";
import settingStyles from "./Settings.module.css";

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>

      <div className={settingStyles.registration}>
        <button type="button" className="btn btn-outline-dark">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Settings;
