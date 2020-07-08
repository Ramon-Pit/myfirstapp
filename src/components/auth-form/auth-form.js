import React from "react";
import {Link} from 'react-router-dom'

import "./auth-form.scss";

const AuthForm = () => {
  return (
    <div className="auth">
      <form>
        <h1>Вход</h1>

        <label>Логин:</label>
        <input type="text" placeholder="Введите логин"/>

        <label>Пароль:</label>
        <input type="password" placeholder="Введите пароль" />

        <button className="btn btn-primary"><Link to="/list-car">Вход</Link></button>
      </form>

      <Link className="reg_link" to="/reg">Зарегистрироваться</Link>
    </div>
  );
};

export default AuthForm;
