import React, { useState, useEffect } from "react";
import musicStyles from "./Music.module.css";
import SongItem from "./Songs/SongItem";

const Music = ({music}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9b0ac7227amshf2a86c54234438bp1e0394jsn32fc9c91c980",
		"x-rapidapi-host": "shazam.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
})
.then(data => setData(data))
.catch(err => {
	console.error(err);
});
  }, []);
  if (data === null){
    return null;
  }else{
    return (
      <div className={musicStyles.wrapper}>
        
        {data.tracks.map((song) => {
          return (
            <a href={song.url}>
            <SongItem
              title={song.title}
              singer={song.subtitle}
              photo={song.images.background}
              icon={music.icon}
            />
            </a>
          );
        })}
        
      </div>
    );
  }
};

export default Music;
