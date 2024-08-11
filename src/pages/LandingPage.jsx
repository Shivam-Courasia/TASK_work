import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
       <Section2 />
        <Section3 />
        <Section4 />
       </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
