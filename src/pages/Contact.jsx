export default function Contact() {
  return (
    <div className="container">
      <div className="card">
        <h1>Contact</h1>
        <p>
          Want to collaborate? Send me a message using the email below.
        </p>

        <div style={{ marginTop: 18 }}>
          <a
            href="mailto:devopsgeek@example.com"
            style={{
              color: "white",
              display: "inline-block",
              padding: "10px 14px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            Email me
          </a>
        </div>
      </div>
    </div>
  );
}

