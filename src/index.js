import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ListItem from './list/ListItem';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Header.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="app">
    <Header/>
    
    <div className="app-body">
      <div className="app-list">
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>

      </div>

    </div>

    <Footer/>
   

  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

