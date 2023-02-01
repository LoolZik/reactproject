import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import './styles/App.css'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
      <div className="App">
        <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
        }}>
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
        </AuthContext.Provider>
        
      </div>
  );
}

export default App;