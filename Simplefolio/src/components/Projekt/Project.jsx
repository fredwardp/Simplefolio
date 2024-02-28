import "./Project.css";

const Project = (props) => {
  return (
    <article className="box">
      <h3>{props.titel}</h3>
      <p className="projects_p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ab.
      </p>
      <p className="projects_bold_p">JavaScript React Sass</p>
    </article>
  );
};

export default Project;
