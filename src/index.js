import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </BrowserRouter>
);
