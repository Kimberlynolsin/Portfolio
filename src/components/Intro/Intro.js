import testImg from "../../assets/image/portrait.png";

const Intro = () => {
  return (
    <section className="home">
      <div className="home__box">
        <h1 className="home__title">
          HELLO, MY NAME IS <span className="home__highlight">KIMBERLY</span>
          AND I'M A <span className="home__highlight">FULLSTACK</span> ENGINEER.
        </h1>
        <p className="home__sentence">
          I have a passion for
          creating innovative solutions to complex problems. When I'm not busy
          crafting websites, you can probably find me gaming.
        </p>
      </div>
    </section>
  );
};

export default Intro;
