import React from 'react';
import './App.css';
// import Sidebar from './components/Sidebar';

import Home from './pages';
import SigninPage from './pages/signin';
import AboutPage from './pages/about';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SigninPage />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
