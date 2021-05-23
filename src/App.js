import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';

import { Route } from "react-router-dom";

const App = (props) => {
  return (
    
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.state.users.friends} />

        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() => <Dialogs users={props.state.users} dialogs={props.state.dialogs} addMessage={props.addMessage} rerender={props.rerender} />} />
          <Route path='/profile' render={()=> <ProfilePage rerender={props.rerender} addLike={props.addLike} removePost={props.removePost} addPost={props.addPost} state={props.state.profilePage} />} />
          <Route path='/news' component={News} />
          <Route path='/music' render={() => <Music music={props.state.music} />} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    
  );
};

export default App;
