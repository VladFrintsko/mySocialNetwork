import React from 'react'
import messageStyles from './Message.module.css';

const Message = ({message}) => {
    return (
        <div>
            <div className={messageStyles.message}>{message}</div>
        </div>
    )
}

export default Message;