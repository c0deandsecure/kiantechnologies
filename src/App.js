import React from 'react';
import Header from './components/Header';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Internship from './components/Intership';
import BestEthical from './components/BestEthical';
import ECCouncil from './components/ECCouncil';
import LatestSection from './components/LatestSection';


function App() {
  return (
    <div className="App">
      <Header />
      <ECCouncil />
      <Contact />
      <Courses />
      <BestEthical />
      <Internship />
      <LatestSection />
    </div>
  );
}

export default App;