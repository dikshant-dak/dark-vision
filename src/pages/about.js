import React from 'react';
import AboutUs from '../components/AboutPage/Index';
import Footer from '../components/Footer';
import HeaderSection from '../components/Header';
import Navbar from '../components/Navbar/Index';

const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <HeaderSection/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default AboutPage;