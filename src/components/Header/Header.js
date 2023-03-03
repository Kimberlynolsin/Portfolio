import { Link } from "react-router-dom";
import logo from "../../assets/logo/KN.png";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} className="header-container__logo" alt="logo"></img>
      </div>
      <div className="header-nav-container">
        <ul className="header-nav-container__list">
          <Link className="header-nav-container__link">
            <li className="header-nav-container__item">HOME</li>
          </Link>
          <Link className="header-nav-container__link">
            <li className="header-nav-container__item">ABOUT ME</li>
          </Link>
          <Link className="header-nav-container__link">
            <li className="header-nav-container__item">PROJECTS</li>
          </Link>
          <Link className="header-nav-container__link">
            <li className="header-nav-container__item">CONTACT ME</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
