import React from 'react';
import './App.scss';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Body from './components/layout/Body';



function App() {
  return (
    <div id="container">
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
