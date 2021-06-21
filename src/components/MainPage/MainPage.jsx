import React from "react";
import mainPageStyles from "./MainPage.module.css";

import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import ProfilePage from "../ProfilePage/ProfilePage";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Settings from "../Settings/Settings";
import Music from "../Music/Music";

import { Route } from "react-router-dom";

const MainPage = (props) => {
  return (
    <div className={mainPageStyles.wrapper}>
      <Header state={props.state} />
      <Navbar friends={props.state.users.friends} icons={props.state.navigation} />

      <div className={mainPageStyles.wrapperContent}>
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              users={props.state.users}
              dialogs={props.state.dialogs}
              addMessage={props.addMessage}
              rerender={props.rerender}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <ProfilePage
              rerender={props.rerender}
              addLike={props.addLike}
              removePost={props.removePost}
              addPost={props.addPost}
              state={props.state}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route
          path="/music"
          render={() => <Music music={props.state.music} />}
        />
        <Route path="/settings" render={() => <Settings flag={props.flag} rerender={props.rerender} />} />
      </div>
    </div>
  );
};

export default MainPage;