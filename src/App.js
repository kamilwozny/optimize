import { Routes, Route, Navigate } from 'react-router-dom';
import Habits from './pages/Habits';
import Profile from './pages/Profile';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import Dashboard from './pages/Dashboard';
import { AnimatePresence } from 'framer-motion';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route
            path='/'
            element={
              !authCtx.isLoggedIn ? <MainPage /> : <Navigate to='/dashboard' />
            }
          />
          <Route
            path='/login'
            element={
              !authCtx.isLoggedIn ? <Login /> : <Navigate to='/profile' />
            }
          ></Route>
          {authCtx.isLoggedIn && <Route path='/habits' element={<Habits />} />}
          {authCtx.isLoggedIn && (
            <Route path='/profile' element={<Profile />} />
          )}
          {authCtx.isLoggedIn && (
            <Route path='/dashboard' element={<Dashboard />} />
          )}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
