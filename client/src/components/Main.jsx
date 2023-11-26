import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects'

function Main() {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const getBladeClass = (path) => {
    return `blade ${activeRoute === path ? 'blade-active' : ''}`;
  };

  return (
    <main className="blade-container">
      <div className={getBladeClass('/')}>
        <AboutMe />
      </div>
      <div className={getBladeClass('/contact')}>
        <Contact />
      </div>
      <div className={getBladeClass('/resume')}>
        <Resume />
      </div>
      <div className={getBladeClass('/projects')}>
        <Projects />
      </div>
    </main>
  );
}

export default Main;