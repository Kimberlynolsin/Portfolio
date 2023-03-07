import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import About from "../AboutPage/AboutPage";


const HomePage = () => {
  return (
    <>
      <Header />
      <Intro id="home" />
      <hr></hr>
      <About id="about" />
    </>
  );
};

export default HomePage;
