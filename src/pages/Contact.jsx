export default function Contact() {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">Let’s build something reliable.</p>
      </div>

      <div className="card">
        <p style={{ marginTop: 0 }}>
          Want to collaborate? Send me a message using the email below.
        </p>

        <div className="cta" style={{ marginTop: 10, justifyContent: "flex-start" }}>
          <a
            className="button button-primary"
            href="mailto:devopsgeek@example.com"
          >
            Email me
          </a>
        </div>
      </div>
    </div>
  );
}

