import { useState } from 'react';

const categories = [
  {
    title: 'Slang & Memes',
    subtitle: '120+ words',
    icon: '😂',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Business & Work',
    subtitle: '150+ words',
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Daily Life',
    subtitle: '200+ words',
    icon: '☕',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Travel & Places',
    subtitle: '120+ words',
    icon: '✈️',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Gaming & Tech',
    subtitle: '110+ words',
    icon: '🎮',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Lifestyle & Fashion',
    subtitle: '90+ words',
    icon: '💄',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  }
];

const marqueeCategories = [...categories, ...categories];

export default function Categories() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-header">
          <h2 className="section-title">Real-Life Vocabulary Moments</h2>
          <p className="section-description">Master the vocabulary for the moments that matter. Stop learning random lists and start preparing for real life.</p>
        </div>

        <div
          className={`categories-marquee ${isPaused ? 'is-paused' : ''}`}
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onPointerCancel={() => setIsPaused(false)}
          onPointerLeave={() => setIsPaused(false)}
        >
          <div className="categories-scroll hide-scrollbar">
            {marqueeCategories.map((cat, idx) => (
              <div key={idx} className="category-card">
                <div className="category-thumb">
                  <img src={cat.image} alt={cat.title} />
                  <div className="category-overlay"></div>
                  <div className="category-label">
                    <div className="category-icon">{cat.icon}</div>
                    <div>
                      <h3 className="category-title">{cat.title}</h3>
                      <p className="category-subtitle">{cat.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
