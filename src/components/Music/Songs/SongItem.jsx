import React from "react";
import songStyles from "./SongItem.module.css";

const SongItem = (props) => {
  
  return (
    <div className={songStyles.wrapper}>
      <div
        className="card mb-3"
        style={{ maxWidth: "500px" }}
        className={songStyles.cardPosition}
      >
        <div className="row g-0">
          <div className="col-md-4" className={songStyles.imgWrapper}>
            <div className={songStyles.playIcon}><img src={props.icon} /></div>
            <img src={props.photo} alt="song" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                <small className="text-muted">{props.singer}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongItem;
