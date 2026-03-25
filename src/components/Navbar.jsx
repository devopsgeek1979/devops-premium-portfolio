
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>DevOps Geek</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}
