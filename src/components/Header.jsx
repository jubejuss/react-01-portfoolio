import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Avaleht</Link>
      <Link to="/blog">Blogi</Link>
      {/* Lisa siia teisi linke */}
    </nav>
  );
};

export default Header;
