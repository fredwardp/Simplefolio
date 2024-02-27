import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero_section">
      <h1>
        Hi, I am <span>John Smith.</span>
      </h1>
      <p className="sub_heading">A Front End Developer.</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, ducimus
        nemo nobis, eum nesciunt fugiat alias tempore animi molestias qui,
        deserunt rem impedit non minus neque dignissimos illum porro. Aut?
      </p>
      <a className="btn" href="#">
        resume
      </a>
    </section>
  );
};

export default Hero;
