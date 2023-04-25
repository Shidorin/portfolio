import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar/Navbar";
import { useRef } from "react";
import Footer from "./pages/Footer";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = (path: string) => {
    let ref;
    switch (path) {
      case "#":
        ref = homeRef;
        break;
      case "#about":
        ref = aboutRef;
        break;
      case "#projects":
        ref = projectsRef;
        break;
      case "#contact":
        ref = contactRef;
        break;
      default:
        break;
    }

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app font-mono">
      <Navbar scrollToRef={handleScroll} />
      <main className="">
        <HomePage ref={homeRef} scrollToRef={handleScroll} />
        <AboutPage ref={aboutRef} />
        <ProjectsPage ref={projectsRef} />
        <ContactPage ref={contactRef} />
      </main>
      <Footer scrollToRef={handleScroll} />
    </div>
  );
}

// <Routes>
//   <Route path="/projects" element={<ProjectsPage />} />
//   <Route path="/contact" element={<ContactPage />} />
// </Routes>
export default App;
