import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import hamburger from '../../assets/icons/hamburger.png'

const Hamburger = () => {
  const handleShowSettings = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Menu right  customBurgerIcon={ <img src={hamburger} className='menu-icon' /> }>
        <Link id="home" className="menu-item" href="/">
          HOME
        </Link>
        <Link id="about" className="menu-item" href="/about">
          ABOUT ME
        </Link>
        <Link id="contact" className="menu-item" href="/contact">
          PROJECTS
        </Link>
        <Link onClick={handleShowSettings} className="menu-item--small" href="">
          CONTACT ME
        </Link>
      </Menu>
    </>
  );
};

export default Hamburger;
