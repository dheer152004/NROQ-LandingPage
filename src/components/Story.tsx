export default function Story() {
  return (
    <section className="story-section">
      <div className="container">
        <div className="story-card">
          <div className="story-bg"></div>

          <div className="story-grid">
            <div className="story-panel">
              <div className="story-tag story-tag--before">Before NROQ</div>
              <div className="story-image-card">
                <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" alt="Confused in meeting" />
                <div className="story-image-overlay" style={{ backgroundColor: 'rgba(15,23,42,0.1)' }}></div>
              </div>
              <blockquote className="story-blockquote">
                "I know English but I don't know what everyone is talking about."
              </blockquote>
            </div>

            <div className="story-panel">
              <div className="story-tag story-tag--after">After NROQ</div>
              <div className="story-image-card">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Confident in meeting" />
                <div className="story-image-overlay" style={{ backgroundColor: 'rgba(37,99,235,0.1)', mixBlendMode: 'overlay' }}></div>
              </div>
              <blockquote className="story-blockquote story-blockquote--after">
                "Now I confidently understand conversations, interviews, memes and meetings."
              </blockquote>
            </div>
          </div>

          <div className="story-connector" aria-hidden="true">
            <svg className="story-connector-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
