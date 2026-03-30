export default function Experience() {
  const items = [
    { role: "DevOps Engineer", detail: "Designed CI/CD and deployment automation." },
    { role: "Cloud Infrastructure", detail: "Built scalable infrastructure using IaC." },
    { role: "Platform Reliability", detail: "Improved observability and reduced incidents." },
  ];

  return (
    <div className="container">
      <div className="card">
        <h1>Experience</h1>
        <div style={{ display: "grid", gap: 14 }}>
          {items.map((it) => (
            <div key={it.role} style={{ background: "rgba(255,255,255,0.04)", padding: 14, borderRadius: 10 }}>
              <h3 style={{ marginTop: 0 }}>{it.role}</h3>
              <p style={{ marginBottom: 0 }}>{it.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

