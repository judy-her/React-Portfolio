// import { useState } from 'react';

import About from './pages/About';
import './App.css';
import Section from './components/Section';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Section />
      <Footer />
      {/* <Inputs /> */}
    </div>
    // <div className=''>
    // <h1>React Portfolio</h1>
    // <div className="card">
    //   <p></p>
    // </div>
  );
}

export default App;
