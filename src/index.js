import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import ProductView from './Pages/ProductView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='home' Component={Home}></Route>
       <Route path='/' Component={App} ></Route>
       <Route path='signup' Component={SignUp}></Route>
       <Route path='products/:id' Component={ProductView}></Route>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

