import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Testimonial } from './components';
function Routing() {
    return (
      <Router>
        <Routes>
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/Testimonial" element={<Testimonial/>} />
        </Routes>
      </Router>

    );
  }

  export default Routing;