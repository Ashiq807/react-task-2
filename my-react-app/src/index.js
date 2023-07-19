import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Utility.css";
import { Header,Main,Footer } from './Utility';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>
);
