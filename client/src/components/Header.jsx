import Nav from './Nav';
import PropTypes from  'prop-types'

function Header({ currentSection, setCurrentSection }) {
  return (
    <header>
      <Nav currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <h1>Frederick Solleder</h1>
    </header>
  );
}

Header.propTypes = {
  currentSection: PropTypes.string,
  setCurrentSection: PropTypes.func
};

export default Header;