import React from 'react';
import Header from './components/Header';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Internship from './components/Intership';
import BestEthical from './components/BestEthical';
import ECCouncil from './components/ECCouncil';
import LatestSection from './components/LatestSection';
import PartnersSection from './components/PartnersSection';

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
      <PartnersSection />
    </div>
  );
}

export default App;