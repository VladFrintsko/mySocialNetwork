import React from 'react'
import messageStyles from './Message.module.css';

const Message = (props) => {
    console.log(props.answers);
    return (
        <div>
            <div className={messageStyles.message}>{props.text}</div>
        </div>
    )
}

export default Message;