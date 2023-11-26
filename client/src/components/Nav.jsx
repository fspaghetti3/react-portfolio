import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  const navTitles = [
    { title: 'About Me', path: '/' },
    { title: 'Contact', path: '/contact' },
    { title: 'Resume', path: '/resume' }
  ];

  return (
    <nav>
      {navTitles.map(({ title, path }) => (
        <Link key={title} to={path} className={location.pathname === path ? 'highlight' : ''}>
          {title}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;