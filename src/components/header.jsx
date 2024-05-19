import { Link } from "react-router-dom";
import '../styles/header.css'
const Header = () => {
    return (
      <header className="header">
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">
                <img src="/src/assets/homelogo3.png" alt="Home" className="nav-logo" />
              </Link>
            </li>
            <li>
              <Link to="/proyects">
                <img src="/src/assets/proyectlogo.png" alt="Proyects" className="nav-logo" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src="/src/assets/aboutlogo3.png" alt="About" className="nav-logo" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;