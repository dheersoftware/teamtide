import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'; 
import AboutUs from './Components/AboutUs/AboutUs';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import OurServices from './Components/OurServices/OurServices';
import Preloader from './Components/Preloader/Preloader';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Jobvisa from './Components/JobVisa/Jobvisa';
import StudyVisa from './Components/Studyvisa/StudyVisa';
import TouristVisa from './Components/Touristvisa/TouristVisa';
import VisaApplicationForm from './Components/Visa Applications/Visa';
import Multilogin from './admin/multilogin/Multilogin';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if preloader has been shown before
    const hasLoadedBefore = localStorage.getItem('hasLoadedBefore');

    if (!hasLoadedBefore) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasLoadedBefore', 'true'); // Mark that the preloader has been shown
      }, 3000); // Adjust the timeout as needed
    }
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/Hero" element={<Hero />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/contact" element={<WhyChooseUs />} />
            <Route path="/contactus" element={<Contact/>} />
            <Route path="/jobvisa" element={<Jobvisa/>} />
            <Route path="/studyvisa" element={<StudyVisa/>} />
            <Route path="/touristvisa" element={<TouristVisa/>} />
            <Route path="/visa" element={<VisaApplicationForm/>} />
            <Route path="/multi" element={<Multilogin/>} />
          </Routes>
          <Footer/>
        </Router>
      )}
    </>
  );
}

export default App;
