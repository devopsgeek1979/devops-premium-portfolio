
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="brand">Shashi Pal Vashisht</div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => `navlink${isActive ? " active" : ""}`}>
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
        >
          About
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
        >
          Skills
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
        >
          Experience
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
