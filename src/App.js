import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Products'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer ></ToastContainer>
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
