export default function Experience() {
  const items = [
    {
      role: "DevOps Engineer",
      detail: "Designed CI/CD and deployment automation.",
    },
    {
      role: "Cloud Infrastructure",
      detail: "Built scalable infrastructure using IaC.",
    },
    {
      role: "Platform Reliability",
      detail: "Improved observability and reduced incidents.",
    },
  ];

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">A quick snapshot of what I’ve been working on.</p>
      </div>

      <div className="experience-grid">
        {items.map((it) => (
          <div key={it.role} className="card exp-item">
            <h3 style={{ marginTop: 0 }}>{it.role}</h3>
            <p style={{ marginBottom: 0, color: "rgba(255,255,255,0.72)" }}>{it.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

