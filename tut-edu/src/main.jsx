import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Header from './components/Header/Header.jsx'
import Content from './components/Content/Content.jsx'
import Filter from './components/Filters/Filter.jsx'
import './main_style.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <Header/>
    <Filter/>
    <Content/>
  </StrictMode>
);