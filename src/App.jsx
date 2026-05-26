import React from 'react';
import './index.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Banner from './components/sections/Banner';
import Solutions from './components/sections/Solutions';
import Banking from './components/sections/Banking';
import YouGet from './components/sections/YouGet';
import Advantages from './components/sections/Advantages';
import DigitalBanking from './components/sections/DigitalBanking';
import Happening from './components/sections/Happening';
import CaseStudies from './components/sections/CaseStudies';
import ContactUs from './components/sections/ContactUs';
import Carosal from './components/sections/Carosal';
export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Banner />
        <Solutions />
        <Banking />
        <YouGet />
        <Advantages />
        <Carosal/>
        <DigitalBanking />
        <Happening />
        <CaseStudies />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
