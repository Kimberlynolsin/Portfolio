import "./App.scss";
import "./styles/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll";

function App() {
  // const location = useLocation();

  // // Scroll to top on page change
  // useEffect(() => {
  //   scroll.scrollToTop();
  // }, [location]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
