import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import User from './components/User';
import WebSocketComponent from './WebSocketComponent';
function App() {
  return (
    <>
    <WebSocketComponent/>
    <Header/>
    <User/>
    <Footer/>
    </>
  );
}

export default App;
