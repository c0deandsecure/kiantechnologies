import React from 'react';
import Header from './home/Header';
import Courses from './home/Courses';
import Contact from './home/Contact';
import Internship from './home/Intership';
import BestEthical from './home/BestEthical';
import ECCouncil from './home/ECCouncil';
import LatestSection from './home/LatestSection';
import PartnersSection from './home/PartnersSection';
import WhyChooseUs from './home/WhyChooseUs';
import Highlights from './home/Highlights';
import ContactUs from './home/ContactUs';
import Footer from './home/Footer';
import EthicalHackingCourse from './home/EthicalHackingCourse';
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