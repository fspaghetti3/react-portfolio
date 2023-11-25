import Nav from './Nav';

function Header({ currentSection, setCurrentSection }) {
  return (
    <header>
      <h1>Frederick Solleder</h1>
      <Nav currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </header>
  );
}

export default Header;