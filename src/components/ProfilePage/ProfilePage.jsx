import React from "react";
import profilePageStyles from "./ProfilePage.module.css";
import UserInfo from './UserInfo/UserInfo';

import MyPosts from "./MyPosts/MyPosts";

const ProfilePage = (props) => {
  return (
    <div className={profilePageStyles.pageWrapper}>
      <UserInfo myInfo={props.state} addPost={props.addPost} />
      <MyPosts rerender={props.rerender} removePost={props.removePost} addLike={props.addLike} state={props.state} addPost={props.addPost} />
    </div>
  );
};

export default ProfilePage;