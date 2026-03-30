export default function Skills() {
  const skills = [
    "CI/CD (GitHub Actions, pipelines)",
    "Infrastructure as Code (Terraform)",
    "Containerization (Docker)",
    "Kubernetes & deployment workflows",
    "Linux & scripting",
  ];

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Skills</h1>
        <p className="page-subtitle">Tools and practices I use to ship reliably.</p>
      </div>

      <div className="card">
        <div className="chips" style={{ marginTop: 12 }}>
          {skills.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

