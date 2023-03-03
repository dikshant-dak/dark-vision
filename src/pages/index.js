import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeaderSection from '../components/Header';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar/Index';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'
// import AboutPage from './about1';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeaderSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <InfoSection {...homeObjThree}/>
        <Footer/>
        {/* <AboutPage/> */}
    </>
  )
}

export default Home;
