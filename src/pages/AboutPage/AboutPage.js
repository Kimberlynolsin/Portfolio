import testImg from "../../assets/image/kimmy.png";
import { Link } from "react-router-dom";
import Api from "../../assets/icons/api-icons.png";
import Css from "../../assets/icons/css-icon.png";
import Express from "../../assets/icons/express-icon.png";
import Html from "../../assets/icons/html-icon.png";
import Js from "../../assets/icons/js-icon.png";
import Mysql from "../../assets/icons/mysql-icon.png";
import Node from "../../assets/icons/node-icon.png";
import React from "../../assets/icons/react-icon.png";
import Sass from "../../assets/icons/sass-icon.png";
const About = () => {
  const skills = [
    {
      id: 1,
      icon: Js,
      title: "Javascript",
    },
    {
      id: 2,
      icon: React,
      title: "React.js",
    },
    {
      id: 3,
      icon: Html,
      title: "Html",
    },
    {
      id: 4,
      icon: Css,
      title: "Css",
    },
    {
      id: 5,
      icon: Sass,
      title: "Sass",
    },
    {
      id: 6,
      icon: Node,
      title: "Node.js",
    },
    {
      id: 7,
      icon: Express,
      title: "Express",
    },
    {
      id: 8,
      icon: Mysql,
      title: "My Sql",
    },
    {
      id: 9,
      icon: Api,
      title: "Api",
    },
  ];

  const skillsMapped = skills.map((skill) => {
    return (
      <div key={skill.id} className="about__box">
        <img className="about__icons" src={skill.icon}></img>
        <p className="about__details" src={skill.title}></p>
      </div>
    );
  });

  return (
    <section className="about">
      <h1 className="about__title">ABOUT ME</h1>
      <div className="about__wrapper">
        <div className="about-container">
          <img src={testImg} className="about-container__img" alt=""></img>
        </div>
        <p className="about__text">
          I'm Kimberly Nolsin, and I am currently living in Canada. Let me tell
          you a little secret: programming is not just a job or a hobby for me;
          it's my passion. I've always had a knack for problem-solving, and
          programming is the perfect outlet for that. Yes, I may appear to be
          your typical computer geek, but trust me, there's more to me than just
          staring at lines of code. The thrill of being able to program my way
          out of a problem is what truly drives my passion for coding. So, if
          you're looking for someone who's not just a programmer, but a coding
          wizard with a passion for tackling challenges, then you've come to the
          right place!
        </p>
        <Link className="about__resume">RESUME</Link>
      </div>
      <div className="about__skills">{skillsMapped}</div>
    </section>
  );
};

export default About;
