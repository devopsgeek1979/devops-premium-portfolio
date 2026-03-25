
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="hero" initial={{opacity:0}} animate={{opacity:1}}>
      <h1>DevOps Geek</h1>
      <p>Premium DevOps Portfolio</p>
    </motion.div>
  );
}
