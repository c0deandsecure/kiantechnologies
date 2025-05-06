import React from 'react';
import Header from './components/Header';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Internship from './components/Intership';
import BestEthical from './components/BestEthical';
import ECCouncil from './components/ECCouncil';
import LatestSection from './components/LatestSection';
import PartnersSection from './components/PartnersSection';
import WhyChooseUs from './components/WhyChooseUs';
import Highlights from './components/Highlights';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import EthicalHackingCourse from './components/EthicalHackingCourse';
function App() {
  return (
    <div className="App">
      <Header />
      <ECCouncil />
      <Contact />
      <Courses />
      <BestEthical />
      <Internship />
      <EthicalHackingCourse />
      <LatestSection />
      <PartnersSection />
      <WhyChooseUs />
      <Highlights />
      <ContactUs />
      <Footer/>
     
    </div>
  );
}

export default App;