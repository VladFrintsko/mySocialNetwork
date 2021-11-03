import React from "react";
import registrationModalStyles from "./RegistrationModal.module.css";

const RegistrationModal = ({ isOpen, close }) => {
  if (!isOpen) return null;
  return (
    <div className={registrationModalStyles.registrationModalWrapper}>
      <div className={registrationModalStyles.modalContainer}>
        <h1>User Registration Form</h1>
        <hr />
        <div className={registrationModalStyles.formWrapper}>
          <form>
            <label>First Name</label>
            <br />
            <input type="text" placeholder="Введите ваше Имя" />
            <br />
            <br />
            <label>Last Name</label>
            <br />
            <input type="text" placeholder="Введите фамилию" />
            <br />
            <br />
            <label>City</label>
            <br />
            <input type="text" placeholder="Текущее место жительства" />
            <br />
            <br />
            <label>Date of birth</label>
            <br />
            <input type="date" placeholder="Дата рождения" />
            <br />
            <br />
            <label>Login</label>
            <br />
            <input type="text" placeholder="Логин" />
            <br />
            <br />
            <label>Password</label>
            <br />
            <input type="password" placeholder="Пароль" />
            <br />
            <br />
            <label>Repeat Password</label>
            <br />
            <input type="password" placeholder="Повторите пароль" />
            <br />
            <br />
            <div className={registrationModalStyles.buttonWrapper}>
              <button onClick={() => close()}>Close registration form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
