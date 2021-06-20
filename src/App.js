import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

const App = (props) => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [loginDirty, setLoginDirty] = useState();
  const [passwordDirty, setPasswordDirty] = useState();
  const [loginError, setLoginError] = useState("Логин не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, passwordError]);

  const loginHandler = (e) => {
    setLogin(e.target.value);
    let usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(String(e.target.value).toLowerCase())) {
      setLoginError("Неккоректный логин");
    } else {
      setLoginError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value > 8) {
      setPasswordError("Пароль должен быть не менее 3 и не более 8 символов");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const enter = () => {
    const regUsers = props.state.users.registredUsers;
    regUsers.forEach((user) => {
      if (login === user.login && password === user.password) {
        return true;
      } else {
        return false;
      }
    });
  };
  return (
    <div className="app-wrapper">
      <div className="enter-field">
        <h1>Вход</h1>
        {loginDirty && loginError && (
          <div style={{ color: "red" }}>{loginError}</div>
        )}
        <input
          onChange={(e) => loginHandler(e)}
          value={login}
          onBlur={(e) => blurHandler(e)}
          name="login"
          type="text"
          placeholder="Enter your login..."
        />
        {passwordDirty && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        <input
          onChange={(e) => passwordHandler(e)}
          value={password}
          onBlur={(e) => blurHandler(e)}
          name="password"
          type="password"
          placeholder="Enter your password..."
        />
        <button disabled={!formValid} onClick={enter}>
          Войти
        </button>
      </div>
      <div>
        <BrowserRouter>
          <MainPage
            state={props.state}
            removePost={props.removePost}
            addLike={props.addLike}
            addPost={props.addPost}
            addMessage={props.addMessage}
            rerender={props.rerender}
          />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
