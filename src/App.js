import { Routes, Route, Navigate } from 'react-router-dom';
import Habits from './pages/Habits';
import Profile from './pages/Profile';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import Dashboard from './pages/Dashboard';
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={!authCtx.isLoggedIn ? <MainPage /> : <Dashboard />}
        />
        <Route
          path='/login'
          element={!authCtx.isLoggedIn ? <Login /> : <Navigate to='/profile' />}
        ></Route>
        {authCtx.isLoggedIn && <Route path='/habits' element={<Habits />} />}
        {authCtx.isLoggedIn && <Route path='/profile' element={<Profile />} />}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;
