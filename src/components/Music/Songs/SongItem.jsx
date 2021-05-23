import React from 'react';
import musicStyles from '../Music.module.css';

const SongItem = (props) => {
    return(<div>
      <span className={musicStyles.singers}>{props.title}</span>:  {props.singer}
    </div>);
  };

  export default SongItem;