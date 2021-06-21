import React from "react";
import userStyles from "./UserInfo.module.css";

const UserInfo = (props) => {
  const friendsSize = props.myInfo.users.friends.length;
  const postsSize = props.myInfo.profilePage.MyPosts.length;

  const likeSize = (countLikes) => {
    const posts = props.myInfo.profilePage.MyPosts;
    for (let i = 0; i < posts.length; ++i) {
      countLikes += posts[i].likes.length;
    }
    return countLikes;
  };

  const regUsers = props.myInfo.users.registredUsers;
  const trueUser = JSON.parse(localStorage.getItem("userData")).login;
  const getUser = regUsers.find((user) => user.login === trueUser);
  return (
    <div className={userStyles.mainInfoWrapper}>
      <div
        className={userStyles.fon}
        style={{ backgroundImage: `url(${getUser.myPhoto})` }}
      ></div>
      <div className={userStyles.mainInfo}>
        <div className={userStyles.userPhoto}>
          <img src={getUser.myPhoto} alt="myPhoto" />
        </div>
        <div className={userStyles.userInfo_wrapper}>
          <div className={userStyles.userName}>{getUser.fullName}</div>
          <div className={userStyles.aboutUser}>
            <div className={userStyles.userInfo}>
              Date of birth: {getUser.dateOfBirth}
            </div>
            <div className={userStyles.userInfo}>City: {getUser.city}</div>
            <div className={userStyles.userInfo}>Education: UMSF</div>
            <div className={userStyles.userInfo}>
              Web site:
                <a href="https://vladfrintsko.github.io/">WoT</a>
            </div>
          </div>
        </div>
      </div>
      <div className={userStyles.aboutInfo}>
        <div className={userStyles.generalInfo}>
          <div>{friendsSize}</div>
          <div>Friends</div>
        </div>
        <div className={userStyles.generalInfo}>
          <div>{likeSize(0)}</div>
          <div>Likes</div>
        </div>
        <div className={userStyles.generalInfo}>
          <div>{postsSize}</div>
          <div>Posts</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
