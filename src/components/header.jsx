import { Link } from "react-router-dom";
import '../styles/header.css'
const Header = () => {
    return (
      <header className="header">
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">
                <img src="https://64.media.tumblr.com/1ce5040077b51ae9765f9751c2dd0560/9a892c26dc69d766-c8/s1280x1920/2b4988fc94764c7fb86cd62debb5fce7f5831dd7.png" alt="Home" className="nav-logo" />
              </Link>
            </li>
            <li>
              <Link to="/proyects">
                <img src="https://64.media.tumblr.com/19a86e4d3c123a911f4d11480de52dcb/7077d958944f4240-a7/s1280x1920/48d1bb19199d6e51223a43d14377a8f104bc085f.png" alt="Proyects" className="nav-logo" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <img src="https://64.media.tumblr.com/a0f708eaef66b3fa60ab85e901ab15c2/9399e71b5218ec61-c5/s1280x1920/c4d1de433d566acca3bed773d5b454967b498d88.png" alt="About" className="nav-logo" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;