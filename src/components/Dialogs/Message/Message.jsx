import React from 'react'
import messageStyles from './Message.module.css';

const Message = (props) => {
    return (
        <div>
            <div className={messageStyles.message}>{props.message}</div>
        </div>
    )
}

export default Message;