import React from "react";
import profilePageStyles from "./ProfilePage.module.css";
import UserInfo from "./UserInfo/UserInfo";

import MyPosts from "./MyPosts/MyPosts";

const ProfilePage = (props) => {
  const {addPost, state, rerender, removePost, addLike} = props;
  return (
    <div className={profilePageStyles.pageWrapper}>
      <UserInfo myInfo={state} addPost={addPost} />
      <MyPosts
        rerender={rerender}
        removePost={removePost}
        addLike={addLike}
        state={state}
        addPost={addPost}
      />
    </div>
  );
};

export default ProfilePage;
