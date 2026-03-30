
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>DevOps Geek</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
