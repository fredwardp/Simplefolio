import Toggle from "../Dark_Light/Dark_Light";
import "./Nac.css";

const Nav = () => {
  return (
    <nav className="container">
      <a href="#" className="logo">
        JS.
      </a>
      <div className="nav_links">
        <a href="#">projects</a>
        <a href="#">skills</a>
        <a href="#">contact</a>
        <Toggle />
      </div>
    </nav>
  );
};

export default Nav;
