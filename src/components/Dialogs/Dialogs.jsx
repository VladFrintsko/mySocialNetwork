import React from "react";
import dialogStyles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogId = 0;

  let textElem = React.createRef();

  let addMessage = () => {
    let text = textElem.current.value;

    if (text.trim() !== '') {
      props.addMessage(text);
      props.rerender();
    } 
    textElem.current.value = "";
  };

  return (
    <div className={dialogStyles.dialogs}>
      <div className={dialogStyles.dialogItems}>
        {props.users.friends.map((friend) => {
          return (
            <DialogItem
              name={friend.friendName}
              avatar={friend.avatar}
              path={`/${++dialogId}`}
            />
          );
        })}
      </div>
      <div className={dialogStyles.messages_wrapper}>
        <div className={dialogStyles.messages}>
          {props.dialogs.messages.map((message) => {
            return <Message text={message}/>;
          })}
          <div className={dialogStyles.formSend}>
            <textarea
              className={dialogStyles.messageText}
              ref={textElem}
              placeholder="Write your message..."
            ></textarea>
            <button className={dialogStyles.btn} onClick={addMessage}>
              send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
