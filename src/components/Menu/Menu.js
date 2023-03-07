import { stack as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import hamburger from "../../assets/icons/hamburger.png";

const Hamburger = () => {
  return (
    <>
      <Menu
        right
        customBurgerIcon={<img src={hamburger} className="menu-icon" />}
      >
        <Link
          to="/"
          className="menu-item"
          smooth={true}
          duration={500}
          offset={-70}
        >
          HOME
        </Link>
        <Link
          to="about"
          className="menu-item"
          smooth={true}
          duration={500}
          offset={-70}
        >
          ABOUT ME
        </Link>
        <Link
          to="projects"
          className="menu-item"
          smooth={true}
          duration={500}
          offset={-70}
        >
          PROJECTS
        </Link>
        <Link
          to="contact"
          className="menu-item"
          smooth={true}
          duration={500}
          offset={-70}
        >
          CONTACT ME
        </Link>
      </Menu>
    </>
  );
};

export default Hamburger;
