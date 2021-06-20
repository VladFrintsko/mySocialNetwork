import Cage from "./user_avatars/Cage.jpg";
import Johnson from "./user_avatars/Johnson.jpg";
import Lawrence from "./user_avatars/Lawrence.jpg";
import mrBeen from "./user_avatars/MrBeen.jpg";
import Shrek from "./user_avatars/Shrek.jpg";
import Snow from "./user_avatars/Snow.jpg";
import Thor from "./user_avatars/Thor.jpg";
import MyAvatar from './user_avatars/my.jpg';

import ProfileIcon from './icons/profile.png';
import MusicIcon from './icons/music.png';
import NewsIcon from './icons/news.png';
import MessageIcon from './icons/message.png';
import SettingIcon from './icons/settings.png';

let id = 0;

let state = {
  myInfo:{
    myName: 'Maria Noris',
    myPhoto: MyAvatar,
  },
  profilePage: {
    MyPosts: [],
  },
  navigation:{
    icons:{
      profile: ProfileIcon,
      message: MessageIcon,
      music: MusicIcon,
      news: NewsIcon,
      setting: SettingIcon,
    },
  },
  music: {
    songs: [
      { title: "Группа крови", singer: "Цой" },
      { title: "Крошка моя", singer: "Руки вверх" },
      { title: "In the end", singer: "Linkin Park" },
      { title: "Believer", singer: "Imagine Dragons" },
      { title: "Самая самая", singer: "Егор Крид" },
      { title: "Она не твоя", singer: "МОТ" },
      { title: "Музыка нас связала", singer: "Мираж" },
      { title: "Новый Год", singer: "Дискотека Авария" },
      { title: "It`s mt life", singer: "Bon Jovi" },
      { title: "New Divide", singer: "Linkin Park" },
    ],
  },
  users: {
    registredUsers:[
      {
        userName: 'Cage',
        login: 'Gage228',
        fullName:'Nicolas Cage',
        password: 'JohnyCage',
        myPhoto: MyAvatar,
      },
      {
        userName: 'Vlad',
        login: 'Frintskov',
        fullName: 'Vladyslav Frintsko',
        password: 'F02062000',
        myPhoto: MyAvatar,
      },
    ],
    friends: [
      {
        friendName: "Cage",
        avatar: Cage,
      },
      {
        friendName: "Johnson",
        avatar: Johnson,
      },
      {
        friendName: "Lawrence",
        avatar: Lawrence,
      },
      {
        friendName: "mrBeen",
        avatar: mrBeen,
      },
      {
        friendName: "Shrek",
        avatar: Shrek,
      },
      {
        friendName: "Snow",
        avatar: Snow,
      },
      {
        friendName: "Thor",
        avatar: Thor,
      },
    ],
  },
  dialogs: {
    messages: [],
  },
};

export let addLike = (like, id) => {
  let post = state.profilePage.MyPosts.find((post) => post.id == id);
  post.likes.push(like);
};

export let removePost = (id) => {
  state.profilePage.MyPosts = state.profilePage.MyPosts.filter(
    (post) => post.id !== id
  );
};

export let addPost = (text) => {
  state.profilePage.MyPosts.push({
    likes: [],
    postText: text,
    id: id++,
  });
};

export let addMessage = (text) => {
  state.dialogs.messages.push(text);
};

export default state;
