import Cage from "./user_avatars/Cage.jpg";
import Johnson from "./user_avatars/Johnson.jpg";
import Lawrence from "./user_avatars/Lawrence.jpg";
import mrBeen from "./user_avatars/mrBeen.jpg";
import Shrek from "./user_avatars/Shrek.jpg";
import Snow from "./user_avatars/Snow.jpg";
import Thor from "./user_avatars/Thor.jpg";
import MyAvatar from './user_avatars/my.jpg';
import MyPhoto from './user_avatars/myPhoto.jpg';
import BrusWein from './user_avatars/BrusWein.jpg';

import ProfileIcon from './icons/profile.png';
import MusicIcon from './icons/music.png';
import NewsIcon from './icons/news.png';
import MessageIcon from './icons/message.png';
import SettingIcon from './icons/settings.png';
import PlayIcon from './icons/playIcon.png';
import userIcon from './icons/userIcon.png';

let id = 0;

let state = {
  profilePage: {
    MyPosts: [],
  },
  icons:{
    userIcon,
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
      { title: "Группа крови", singer: "Цой", photo: MyAvatar},
      { title: "Крошка моя", singer: "Руки вверх", photo: MyAvatar},
      { title: "In the end", singer: "Linkin Park", photo: MyAvatar},
      { title: "Believer", singer: "Imagine Dragons", photo: MyAvatar},
      { title: "Самая самая", singer: "Егор Крид", photo: MyAvatar},
      { title: "Она не твоя", singer: "МОТ", photo: MyAvatar},
      { title: "Музыка нас связала", singer: "Мираж", photo: MyAvatar },
      { title: "Новый Год", singer: "Дискотека Авария", photo: MyAvatar},
      { title: "It`s mt life", singer: "Bon Jovi", photo: MyAvatar},
      { title: "New Divide", singer: "Linkin Park", photo: MyAvatar},
    ],
    icon : PlayIcon,
  },
  users: {
    registredUsers:[
      {
        userName: 'Batman',
        login: 'Wein228',
        fullName:'Brus Wein',
        password: 'Batman',
        city: 'Gotem',
        dateOfBirth: '11 january 1972',
        myPhoto: BrusWein,
      },
      {
        userName: 'Nick',
        login: 'F123',
        fullName:'Nick Davidson',
        password: 'F123',
        city: 'London',
        dateOfBirth: '19 october 1984',
        myPhoto: MyAvatar,
      },
      {
        userName: 'Vlad',
        login: 'Frintskov',
        fullName: 'Vladyslav Frintsko',
        password: 'F02062000',
        city: 'Dnipro',
        dateOfBirth: '2 june 2000',
        myPhoto: MyPhoto,
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
    answerMessage: 'Hi!',
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
