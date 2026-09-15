import { Star, Play, CheckCircle2 } from 'lucide-react';
import heroPhones from '../assets/hero-phones.png';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-badge">
              <Star className="button-icon" />
              Made for real conversations
            </div>
            <h1 className="hero-title">
              From memes to <br className="hero-break" /> meetings. <br className="hero-break" />
              <span className="hero-title-highlight">Master every word.</span>
            </h1>

            <p className="hero-description">
              Learn the words people actually use—from Gen Z slang and business jargon to travel, gaming, startups, AI, and everyday conversations. Build confidence with visual learning, examples, quizzes, and real-life contexts.
            </p>

            <div className="hero-cta-group">
              <a href="#download" className="button-pill button-primary">
                Start Learning — It's Free
                <svg className="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <a href="#vocabulary" className="button-pill button-secondary">
                Explore Vocabulary
              </a>
            </div>

            <div className="hero-review">
              <div className="hero-review-avatars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                ))}
              </div>
              <div className="hero-review-copy">
                <div className="hero-rating-stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="button-icon hero-rating-icon" />
                  ))}
                </div>
                <p><span className="hero-review-score">4.8/5</span> from 10,000+ learners</p>
              </div>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-icon">
                  <svg className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"/></svg>
                  <span className="hero-stat-title">10K+</span>
                </div>
                <p className="hero-stat-copy">Active Learners</p>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-icon">
                  <svg className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                  <span className="hero-stat-title">500K+</span>
                </div>
                <p className="hero-stat-copy">Words Learned</p>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-icon">
                  <svg className="button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="hero-stat-title">25+</span>
                </div>
                <p className="hero-stat-copy">Categories</p>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-icon">
                  <Star className="button-icon hero-stat-icon-star" />
                  <span className="hero-stat-title">4.8+</span>
                </div>
                <p className="hero-stat-copy">Play Store Rating</p>
              </div>
            </div>
          </div>

          <div className="hero-mockup">
              <svg className="hero-mockup-shape" width="600" height="600" viewBox="-350 -270 700 650">
                <path
                  d="M137.5 -190.9
                    C184.1 -155.4 231.9 -123.1 244.5 -80.4
                    C257.1 -37.6 234.6 15.7 224.7 81.4
                    C214.9 147.1 217.6 225.2 182.3 270.4
                    C146.9 315.6 73.5 327.8 6.6 318.8
                    C-60.3 309.7 -120.7 279.5 -172.2 239.5
                    C-223.7 199.6 -266.4 150 -290.9 90.7
                    C-315.4 31.4 -321.8 -37.6 -288.6 -79.6
                    C-255.5 -121.6 -182.8 -136.7 -128.2 -169.6
                    C-73.5 -202.5 -36.7 -253.2 4.4 -259.2
                    C-60.3 309.7 -120.7 279.5 -172.2 239.5
                    C-73.5 -202.5 -36.7 -253.2 4.4 -259.2
                    C45.5 -265.2 90.9 -226.5 137.5 -190.9"
                  fill="#2563eb" />
              </svg>
            <div className="hero-mockup-card">
              <img src={heroPhones} alt="NROQ App Screens" className="hero-mockup-img" />
            </div>

            <div className="hero-mockup-chip hero-mockup-chip--top-left">
              <span className="hero-chip-text">No cap</span>
              <span className="hero-chip-emoji">😂</span>
            </div>

            <div className="hero-mockup-chip hero-mockup-chip--bottom-right">
              <span className="hero-chip-text">Synergy</span>
              <span className="hero-chip-emoji">💼</span>
            </div>

            <div className="hero-mockup-chip hero-mockup-chip--top-right">
              <span className="hero-chip-text">Pre-seed Funding</span>
              <span className="hero-chip-emoji">🚀</span>
            </div>

            <div className="hero-mockup-chip hero-mockup-chip--bottom-left">
              <span className="hero-chip-text">Flat White</span>
              <span className="hero-chip-emoji">☕</span>
            </div>

            <div className="hero-mockup-chip hero-mockup-chip--bottom-center">
              <span className="hero-chip-text">Wanderlust</span>
              <span className="hero-chip-emoji">✈️</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
