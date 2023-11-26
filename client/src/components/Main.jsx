import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';

function Main() {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  return (
    <main className="blade-container">
      <div className={`blade ${activeRoute === '/' ? 'blade-active' : ''}`}>
        <AboutMe />
      </div>
      <div className={`blade ${activeRoute === '/contact' ? 'blade-active' : ''}`}>
        <Contact />
      </div>
      <div className={`blade ${activeRoute === '/resume' ? 'blade-active' : ''}`}>
        <Resume />
      </div>
    </main>
  );
}

export default Main;