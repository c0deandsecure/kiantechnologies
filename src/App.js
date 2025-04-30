import React from 'react';
import Header from './components/Header';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Internship from './components/Intership';
import BestEthical from './components/BestEthical';


function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Courses />
      <BestEthical />
      <Internship />
    </div>
  );
}

export default App;