
import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/devopsgeek1979/repos")
      .then(res => setRepos(res.data.slice(0,5)));
  }, []);

  return (
    <div className="container">
      <h1>Projects</h1>
      {repos.map(r => (
        <div className="card" key={r.id}>
          <h3>{r.name}</h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
}
