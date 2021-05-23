import Cage from "./user_avatars/Cage.jpg";
import Johnson from "./user_avatars/Johnson.jpg";
import Lawrence from "./user_avatars/Lawrence.jpg";
import mrBeen from "./user_avatars/mrBeen.jpg";
import Shrek from "./user_avatars/Shrek.jpg";
import Snow from "./user_avatars/Snow.jpg";
import Thor from "./user_avatars/Thor.jpg";

let id = 0;

let state = {
  profilePage: {
    MyPosts: [],
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
  let post = state.profilePage.MyPosts.find(post => post.id == id);
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
