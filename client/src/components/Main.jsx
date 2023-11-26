import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects'

function Main() {
  const location = useLocation();
  const history = useHistory();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const getBladeClass = (path) => {
    return `blade ${activeRoute === path ? 'blade-active' : ''}`;
  };

  const handleBladeClick = (path) => {
    history.push(path);
  }

  return (
    <main className="blade-container">
      <div className={getBladeClass('/')} onClick={() => handleBladeClick('/')}>
        <AboutMe />
      </div>
      <div className={getBladeClass('/contact')} onClick={() => handleBladeClick('/contact')}>
        <Contact />
      </div>
      <div className={getBladeClass('/resume')} onClick={() => handleBladeClick('/resume')}>
        <Resume />
      </div>
      <div className={getBladeClass('/projects')} onClick={() => handleBladeClick('/projects')}>
        <Projects />
      </div>
    </main>
  );
}

export default Main;