import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './main_style.css'

import MainAllCources from './components/Pages/CourcesAll/CourcesAllMain.jsx'
import MainEnter from './components/Pages/Enter/MainEnter.jsx'
import Header from './components/Shared/Header/Header.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={<MainAllCources/>}>
        </Route>

        <Route path='cources' element={<MainEnter/>}>
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);