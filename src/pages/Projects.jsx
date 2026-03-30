
import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://api.github.com/users/devopsgeek1979/repos")
      .then((res) => setRepos(res.data.slice(0, 6)))
      .catch((err) => {
        setError(
          err?.response?.data?.message ||
            err?.message ||
            "Failed to fetch repositories"
        );
      })
      .finally(() => setLoading(false));
  }, []);

  const skeletonCards = [0, 1, 2];

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">Selected work from GitHub</p>
      </div>

      {loading && (
        <div className="project-grid" aria-busy="true">
          {skeletonCards.map((i) => (
            <div key={i} className="skeleton" />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Could not load projects</h2>
          <p style={{ color: "rgba(255,255,255,0.72)" }}>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="project-grid">
          {repos.map((r) => (
            <a
              className="project-card card"
              key={r.id}
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <h3 style={{ margin: "2px 0 0" }}>{r.name}</h3>
              <p style={{ margin: "10px 0 0", color: "rgba(255,255,255,0.72)" }}>
                {r.description || "No description provided."}
              </p>
              <div className="project-meta">
                <span className="meta-pill">{r.language || "—"}</span>
                <span className="meta-pill">{r.stargazers_count} stars</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
