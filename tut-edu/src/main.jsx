import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Header from './components/Header/Header.jsx'
import './main_style.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <Header/>
  </StrictMode>
);