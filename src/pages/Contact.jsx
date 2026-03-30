import { useState } from "react";

const CONTACT_TO = "vashisht.jammu@gmail.com";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameOk = name.trim().length >= 2;
  const emailOk = isValidEmail(email);
  const messageOk = message.trim().length >= 10;
  const canSend = nameOk && emailOk && messageOk;

  const errorText = !canSend
    ? "Please enter a valid name, email, and a message (10+ characters)."
    : "";

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">Let’s build something reliable.</p>
      </div>

      <div className="card">
        <p style={{ marginTop: 0 }}>
          Want to collaborate? Fill out the form below and I’ll reply via email.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!canSend) return;

            const subject = `Portfolio message from ${name.trim()}`;
            const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
            const href = `mailto:${CONTACT_TO}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`;

            window.location.href = href;
          }}
        >
          <div className="form-grid">
            <div className="field">
              <label className="label" htmlFor="contact-name">
                Your name
              </label>
              <input
                id="contact-name"
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                autoComplete="name"
                required
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="contact-email">
                Your email
              </label>
              <input
                id="contact-email"
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                autoComplete="off"
                required
              />
            </div>
          </div>

          {!!errorText && (
            <p className="error-text" style={{ marginTop: 10 }}>
              {errorText}
            </p>
          )}

          <div className="form-actions">
            <button className="button button-primary" type="submit" disabled={!canSend}>
              Send Message
            </button>

            <p className="helper-text">
              Or email directly:{" "}
              <a style={{ color: "white" }} href={`mailto:${CONTACT_TO}`}>
                {CONTACT_TO}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

