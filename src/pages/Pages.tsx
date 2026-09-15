import { FormEvent, type ReactNode, useState } from 'react';
import { ArrowLeft, CheckCircle2, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

type ContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; body: string }[];
};

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-page min-h-screen selection:bg-blue-100 selection:text-blue-900 text-gray-900">
      <header className="page-header">
        <div className="container page-header-inner">
          <Link to="/" className="page-brand" aria-label="NROQ home">
            <span className="page-brand-mark">N</span>
            <span>NROQ</span>
          </Link>
          <Link to="/" className="page-back-link">
            <ArrowLeft className="button-icon" />
            Back to home
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="page-footer">
        <div className="container page-footer-inner">
          <span>Words that click. Knowledge that sticks.</span>
          <Link to="/contact">Contact support</Link>
        </div>
      </footer>
    </div>
  );
}

export function ContentPage({ eyebrow, title, intro, sections }: ContentPageProps) {
  return (
    <PageShell>
      <article className="content-page container">
        <p className="page-eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-intro">{intro}</p>
        <div className="content-sections">
          {sections.map((section) => (
            <section key={section.title} className="content-section">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </PageShell>
  );
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageShell>
      <div className="contact-page container">
        <div className="contact-copy">
          <p className="page-eyebrow">Get in touch</p>
          <h1 className="page-title">We’re here to help.</h1>
          <p className="page-intro">Have a question about NROQ, found a tricky word, or want to share an idea? Send us a note and our team will get back to you.</p>
          <div className="contact-detail">
            <Mail className="contact-detail-icon" />
            <div>
              <strong>Email support</strong>
              <a href="mailto:mail@nroq.in">mail@nroq.in</a>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="form-success" role="status">
              <CheckCircle2 /> Thanks, your message is ready for our team.
            </div>
          )}
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required placeholder="Your name" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={6} placeholder="How can we help?" />
          <button className="button-pill button-primary" type="submit">
            Send message
            <Send className="button-icon" />
          </button>
        </form>
      </div>
    </PageShell>
  );
}
