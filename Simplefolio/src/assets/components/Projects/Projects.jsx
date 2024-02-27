import Project from "../Projekt/Project";
import "./Projects.css";

const Projects = (props) => {
  return (
    <section className="projects_section container">
      <h2>Projects</h2>
      <div className="box_wrapper">
        <Project titel="Project 1" />
        <Project titel="Project 2" />
        <Project titel="Project 3" />
      </div>
    </section>
  );
};

export default Projects;
