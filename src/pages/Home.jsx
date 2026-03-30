
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="hero-content">
        <div className="hero-badge">DevOps • CI/CD • Cloud-Native</div>
        <h1>Shashi Pal Vashisht</h1>
        <p>Premium DevOps Portfolio</p>

        <div className="cta">
          <Link className="button button-primary" to="/projects">
            View Projects
          </Link>
          <Link className="button" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
