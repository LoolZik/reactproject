import React, { useContext } from 'react';
import MyButton from '../components/UI/MyButton/MyButton';
import MyInput from '../components/UI/MyInput/MyInput';
import { AuthContext } from '../context';

function Login() {
  const {isAuth ,setIsAuth} = useContext(AuthContext)

  const login = (e) => {
    e.preventDefault()

    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  } 

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <h1>Welcome to Out Application</h1>
          <p>Please login ti use the platform</p>
        </div>
        <form className="login__form" onSubmit={login}>
          <div className="login__input">
            <label for="email">Enter Email</label>
            <MyInput type="text" id="email"/>
          </div>
          <div className="login__input">
            <label for="password">Enter Password</label>
            <MyInput type="password" id="password"/>
          </div>
          <div className="login__checkbox">
            <input type="checkbox" id="checkbox"/>
            <label for="checkbox">Remember me</label>
          </div>
          <MyButton>SIGN IN</MyButton>
        </form>
        <div className="login__footer">
          <a href="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="" />
            Facebook Login
          </a>
          <a href="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png" alt="" />
            Google Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
