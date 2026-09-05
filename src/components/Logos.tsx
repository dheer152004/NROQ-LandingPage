export default function Logos() {
  return (
    <section className="logos-section">
      <div className="container logos-row">
        <p className="logos-copy">Trusted by learners & featured in</p>
        <div className="logos-list">
          <div className="logos-item logos-item--brand-primary">
            Your<span className="logos-item-highlight">Story</span>
          </div>
          <div className="logos-item logos-item--brand-secondary">
            <span className="logos-badge logos-badge--indie">IH</span>
            INDIE HACKERS
          </div>
          <div className="logos-item logos-item--brand-tertiary">
            <span className="logos-badge logos-badge--producthunt">P</span>
            Product Hunt
          </div>
          <div className="logos-item logos-item--brand-green">
            <span className="logos-item-big">TC</span>
            <span className="logos-item-text">TechCrunch</span>
          </div>
        </div>
      </div>
    </section>
  );
}
