import React, { useEffect, useState } from 'react';
import LandingPage from './pages/LandingPage';
import './index.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="vertical-progress-bar-container">
        <div className="vertical-progress-bar" style={{ height: `${scrollProgress}%` }}></div>
      </div>
      <LandingPage />
    </div>
  );
}

export default App;
