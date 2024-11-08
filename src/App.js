
import React from 'react';
 import NavBar from './frontend/NavBar';
import Section1 from './frontend/Section1';
import AboutUs from './frontend/AboutUs';
import Services from './frontend/Services';
import Reviews from './frontend/Reviews';
import PricingPlans from './frontend/PricingPlans';
import Portfolio from './frontend/Protfolio';
import WhoUsing from './frontend/WhoUsing';
import Footer from './frontend/Footer';
import ReachOutForm from './frontend/ReachOut';
function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Section1/>
      <AboutUs/>
      <Services/>
      <Portfolio/>
      <WhoUsing />
      <Reviews/>
      <PricingPlans/>
      <Footer/>

      <ReachOutForm/>
    </div>
  );
}

export default App;
