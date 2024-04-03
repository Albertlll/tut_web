import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './main_style.css'

import MainAllCources from './components/CourcesAll/CourcesAllMain.jsx'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <MainAllCources/>
  </StrictMode>
);