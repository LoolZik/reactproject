import React, { useContext } from 'react';
import MyButton from '../components/UI/MyButton/MyButton';
import MyInput from '../components/UI/MyInput/MyInput';
import { AuthContext } from '../context';

import '../styles/App.css'

function Login() {
  const {isAuth ,setIsAuth} = useContext(AuthContext)

  const login = (e) => {
    e.preventDefault()

    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  } 

  return (
    <div className="login">
      <form className="login__form" onSubmit={login}>
          <h1>Страница для входа</h1>
          <MyInput/>
          <MyInput/>
          <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}

export default Login;
