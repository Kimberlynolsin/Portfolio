import logo from "../../assets/logo/KN.png";
import Hamburger from "../Menu/Menu";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} className="header-container__logo" alt="logo"></img>
      </div>
      <div>
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;

