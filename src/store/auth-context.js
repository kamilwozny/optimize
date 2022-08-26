import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  habitsCount: 0,
  count: () => {},
  login: (token) => {},
  logout: () => {},
});

const calcLoginTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const expireTime = new Date(expirationTime).getTime();
  const remainingTime = expireTime - currentTime;
  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationTime = localStorage.getItem('expirationTime');
  const remainingTime = calcLoginTime(storedExpirationTime);
  if (remainingTime <= 300000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }
  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  let count = parseInt(localStorage.getItem('counter'));
  const [habitsCount, setHabitsCount] = useState(count);
  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token;

  const countHandler = () => {
    let count = localStorage.getItem('counter');
    localStorage.setItem('counter', parseInt(count) + 1);
    setHabitsCount(parseInt(count));
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('uid');
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime, uid) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('uid', uid);
    localStorage.setItem('expirationTime', expirationTime);
    const remainingTime = calcLoginTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn,
    habitsCount,
    count: countHandler,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
