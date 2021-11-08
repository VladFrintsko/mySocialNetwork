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
  const { state, addMessage, rerender, addLike, removePost, addPost, flag } =
    props;
  return (
    <div className={mainPageStyles.wrapper}>
      <Header state={state} />
      <Navbar friends={state.users.friends} icons={state.navigation} />

      <div className={mainPageStyles.wrapperContent}>
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              users={state.users}
              dialogs={state.dialogs}
              addMessage={addMessage}
              rerender={rerender}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <ProfilePage
              rerender={rerender}
              addLike={addLike}
              removePost={removePost}
              addPost={addPost}
              state={state}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" render={() => <Music music={state.music} />} />
        <Route
          path="/settings"
          render={() => <Settings flag={flag} rerender={rerender} />}
        />
      </div>
    </div>
  );
};

export default MainPage;
