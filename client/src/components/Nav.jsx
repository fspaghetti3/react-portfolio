import React from 'react';

function Nav({ currentSection, setCurrentSection }) {
  const navTitles = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      {navTitles.map((title) => (
        <button
          key={title}
          className={currentSection === title.replace(' ', '') ? 'highlight' : ''}
          onClick={() => setCurrentSection(title.replace(' ', ''))}
        >
          {title}
        </button>
      ))}
    </nav>
  );
}

export default Nav;