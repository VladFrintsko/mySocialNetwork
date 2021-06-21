import React from 'react'
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.img_wrapper}><img src={props.avatar} alt='friend'></img></div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default Friends;
