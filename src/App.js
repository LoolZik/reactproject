import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import { AuthContext } from './context';
import './styles/App.scss'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth')) return setIsAuth(true)
  })

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <BrowserRouter>
        {isAuth && <Navbar/>}
        <div className="App">
          <AppRouter/>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;