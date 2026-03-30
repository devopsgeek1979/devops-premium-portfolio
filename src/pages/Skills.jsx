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
      <div className="card">
        <h1>Skills</h1>
        <div style={{ display: "grid", gap: 10 }}>
          {skills.map((s) => (
            <div
              key={s}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: 12,
                borderRadius: 10,
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

