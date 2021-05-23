import React from "react";
import musicStyles from "./Music.module.css";
import SongItem from "./Songs/SongItem";

const Music = (props) => {
  return (
    <div className={musicStyles.wrapper}>
      {props.music.songs.map((song) => {
        return <SongItem title={song.title} singer={song.singer}  />;
      })}
    </div>
  );
};

export default Music;
