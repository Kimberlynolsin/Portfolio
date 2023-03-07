import testImg from "../../assets/image/kimmy.png";
import {Link} from "react-router-dom"
const About = () => {
  return (
    <section className="about">
      <h1 className="about__title">ABOUT ME</h1>
      <div className="about__wrapper">
        <div className="about-container">
          <img src={testImg} className="about-container__img"></img>
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
    </section>
  );
};

export default About;
