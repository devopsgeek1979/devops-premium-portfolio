export default function About() {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">About</h1>
        <p className="page-subtitle">
          I build reliable CI/CD pipelines, automate infrastructure, and ship cloud-native solutions.
        </p>
      </div>

      <div className="section-grid">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>What I do</h2>
          <p>
            I’m Shashi Pal Vashisht—focused on building reliable CI/CD pipelines,
            infrastructure automation, and cloud-native delivery.
          </p>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>How I work</h2>
          <p>
            I value repeatable deployments, observable systems, and clean automation.
            The goal is always: fewer manual steps, more confidence, faster iteration.
          </p>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Stack</h2>
          <div className="chips" style={{ marginTop: 12 }}>
            <span className="chip">CI/CD</span>
            <span className="chip">IaC (Terraform)</span>
            <span className="chip">Docker</span>
            <span className="chip">Kubernetes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

