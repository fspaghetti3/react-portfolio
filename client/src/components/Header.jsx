import Nav from './Nav';
import PropTypes from  'prop-types'

function Header({ currentSection, setCurrentSection }) {
  return (
    <header>
      <h1>Frederick Solleder</h1>
      <Nav currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </header>
  );
}

Header.propTypes = {
  currentSection: PropTypes.string,
  setCurrentSection: PropTypes.func
};

export default Header;