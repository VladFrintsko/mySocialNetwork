import React from 'react'
import s from './Friends.module.css';

const Friends = ({avatar, name}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.img_wrapper}><img src={avatar} alt='friend'></img></div>
            <div className={s.name}>{name}</div>
        </div>
    )
}

export default Friends;
