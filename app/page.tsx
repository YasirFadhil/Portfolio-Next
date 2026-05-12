import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Education />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}
