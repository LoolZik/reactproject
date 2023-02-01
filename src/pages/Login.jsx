import React, { useContext } from 'react';
import MyButton from '../components/UI/MyButton/MyButton';
import MyInput from '../components/UI/MyInput/MyInput';
import { AuthContext } from '../context';

import '../styles/App.css'

function Login() {
  const {setIsAuth} = useContext(AuthContext)

  return (
    <div>
        <h1>Страница для входа</h1>
        <MyInput/>
        <MyInput/>
        <MyButton onClick={() => setIsAuth(true)}>Войти</MyButton>
    </div>
  );
}

export default Login;
