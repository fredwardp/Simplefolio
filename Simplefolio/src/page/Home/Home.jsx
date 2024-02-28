import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import "./Home.css";

const Home = () => {
  return (
    <section className="bg_color">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
};

export default Home;
