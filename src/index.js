import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css'
import App from './component/App';
import TopBar from './component/TopBar';
import Header from './component/Header';
import Home from './component/Home';
import Home2 from './component/Home2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopBar />
    <Header />
    <Home />
    <Home2/>
  </React.StrictMode>
);