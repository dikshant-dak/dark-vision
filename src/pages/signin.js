import React from 'react';
import Footer from '../components/Footer/index';
import Navbar from '../components/Navbar/Index';
import ScrollToTop from '../components/ScrollToTop';
import SignIn from '../components/Signin';
// import Navbar from '../components/Navbar/Index';
// import Footer from '../components/Footer';
// import HeaderSection from '../components/Header';

const SigninPage = () => {
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <SignIn/>
      <Footer/>
    </div>
  )
}

export default SigninPage;
