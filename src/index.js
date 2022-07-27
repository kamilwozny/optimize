import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
// import { Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import Login from './pages/Login';
import { AuthContextProvider } from './store/auth-context';
// import Habits from './pages/Habits';
// import Profile from './pages/Profile';
const root = createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
