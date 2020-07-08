import React from "react";
import {Link} from 'react-router-dom'

import "./reg-form.scss";

const RegForm = () => {
  return (
    <div className="reg">
      <form>
        <h1>Регистрация</h1>

        <label>Имя:</label>
        <input type="text" placeholder="Введите имя" />

        <label>Фамилия:</label>
        <input type="text" placeholder="Введите фамилию" />

        <label>E-Mail:</label>
        <input type="mail" placeholder="Введите E-mail" />

        <label>Пароль:</label>
        <input type="password" placeholder="Введите пароль" />

        <label>Повыторите пароль:</label>
        <input type="password" placeholder="Введите пароль еще раз" />

        <button className="btn btn-primary"><Link to="#">Зарегистрироваться</Link></button>
      </form>

      <Link className="back_link" to="/">Вернуться</Link>
    </div>
  );
};

export default RegForm;
