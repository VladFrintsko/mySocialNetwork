import React from 'react';
import userStyles from './UserInfo.module.css';

 const UserInfo = (props) => {
    return (
        <div className={userStyles.mainInfoWrapper}>
          <div className={userStyles.userPhoto}>
            <img
              src="https://eyeandfaceclinic.ie/wp-content/uploads/2018/01/beautiful-face-clear-skin.jpg"
              alt="myPhoto"
            />
          </div>
          <div className={userStyles.userInfo_wrapper}>
            <div className={userStyles.userName}>Maria Norris</div>
            <div className={userStyles.aboutUser}>
              <div className={userStyles.userInfo}>
                Date of birth: 1 january
              </div>
              <div className={userStyles.userInfo}>City: Dnipro</div>
              <div className={userStyles.userInfo}>Education: UMSF</div>
              <div className={userStyles.userInfo}>
                Web site: <a href="https://vladfrintsko.github.io/">https://vladfrintsko.github.io/</a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default UserInfo;
