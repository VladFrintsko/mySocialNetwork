import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import RegistrationModal from "./components/RegistrationModal/RegistrationModal";

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
  const [flag, setFlag] = useState();

  useEffect(() => {
    if (localStorage.getItem("userData") !== null) {
      setFlag(true);
    } else {
      setFlag(false);
    }
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
        const saveRegData = {
          login,
          password,
        };
        localStorage.setItem("userData", JSON.stringify(saveRegData));
        setFlag(true);
      }
    });
  };

  const [showRegistrationModal, setRegistrationModal] = useState(false);

  const closeRegistrationModal = () => {
    setRegistrationModal(false);
  }

  if (flag) {
    return (
      <div>
        <BrowserRouter>
          <MainPage
            state={props.state}
            removePost={props.removePost}
            addLike={props.addLike}
            addPost={props.addPost}
            addMessage={props.addMessage}
            rerender={props.rerender}
            flag={setFlag}
          />
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="reg-wrapper">
        <div className="signIn-wrapper">
          <div className="userIcon">
            <img src={props.state.icons.userIcon} />
          </div>
          <div className="enter-field">
            <div className="login-field">
              {loginDirty && loginError && (
                <div style={{ color: "red" }}>{loginError}</div>
              )}
              <input
                onChange={(e) => loginHandler(e)}
                value={login}
                onBlur={(e) => blurHandler(e)}
                name="login"
                type="text"
                placeholder="Login"
              />
            </div>
            <div className="password-field">
              {passwordDirty && passwordError && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )}
              <input
                onChange={(e) => passwordHandler(e)}
                value={password}
                onBlur={(e) => blurHandler(e)}
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="button-field">
              <button
                className="button_logIn"
                disabled={!formValid}
                onClick={enter}
              >
                Войти
              </button>
            </div>
            <div className="button-field">
              <button className="button_registration" onClick={()=>{setRegistrationModal(true)}}>Регистрация</button>
            </div>
          </div>
        </div>
        <RegistrationModal isOpen={showRegistrationModal} close={closeRegistrationModal} />
      </div>
    );
  }
};

export default App;
