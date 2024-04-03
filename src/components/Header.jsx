import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <nav>
        <Link to="/">Avaleht</Link>
        <Link to="/projektid">Projektid</Link>
        <Link to="/blog">Blogi</Link>
        <Link to="/kontakt">Kontakt</Link>
        </nav>
    </header>
  );
};

export default Header;
