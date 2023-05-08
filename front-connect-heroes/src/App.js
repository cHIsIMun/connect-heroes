import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import NavigationButtons from './components/NavigationButtons';
import CreatePostSection from './components/CreatePostSection';
import Feed from './components/Feed';
import SearchBar from './components/SearchBar';
import FriendList from './components/FriendList';
import Chat from './components/Chat';
import LoginPage from './components/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica se o usuário está autenticado (exemplo: verificando se há um token válido)
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <LoginPage />
      ) : (
        <>
          <Header />
          <div className="main-content">
            <div className="left-sidebar">
              <ProfileSection />
              <NavigationButtons />
            </div>
            <div className="center-content">
              <CreatePostSection />
              <Feed />
            </div>
            <div className="right-sidebar">
              <SearchBar />
              <FriendList />
              <Chat />
            </div>
          </div>
          
        </>
      )}
    </div>
  );
}

export default App;