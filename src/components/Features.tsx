import React from 'react';
import { Eye, Brain, ListPlus, Target, CloudOff, Moon, Sparkles, Medal, TrendingUp, Flame } from 'lucide-react';

const features = [
  {
    title: 'Visual Learning',
    desc: 'Understand words instantly with beautiful contextual imagery.',
    icon: <Eye />,
    iconClass: 'feature-icon feature-icon--primary'
  },
  {
    title: 'Smart Quiz',
    desc: 'Spaced repetition algorithms that adapt to your memory.',
    icon: <Brain />,
    iconClass: 'feature-icon feature-icon--primary'
  },
  {
    title: 'Personalized Lists',
    desc: 'Organize vocabulary by project, meeting, or interest.',
    icon: <ListPlus />,
    iconClass: 'feature-icon feature-icon--primary'
  },
  {
    title: 'Daily Goals',
    desc: 'Set your pace and build a sustainable learning habit.',
    icon: <Target />,
    iconClass: 'feature-icon feature-icon--primary'
  },
  {
    title: 'Offline Learning',
    desc: 'Download packs and learn anywhere, anytime.',
    icon: <CloudOff />,
    iconClass: 'feature-icon feature-icon--primary'
  },
  {
    title: 'Dark Mode',
    desc: 'A gorgeous, eye-friendly interface for late-night studying.',
    icon: <Moon />,
    iconClass: 'feature-icon feature-icon--primary'
  },
  {
    title: 'AI Explanation',
    desc: 'Get deep contextual examples generated for any word.',
    icon: <Sparkles />,
    iconClass: 'feature-icon feature-icon--purple'
  },
  {
    title: 'Badges & Achievements',
    desc: 'Earn gorgeous rewards as your vocabulary expands.',
    icon: <Medal />,
    iconClass: 'feature-icon feature-icon--gold'
  },
  {
    title: 'Progress Tracking',
    desc: 'Visualize your growth with beautiful insights.',
    icon: <TrendingUp />,
    iconClass: 'feature-icon feature-icon--green'
  },
  {
    title: 'Streak System',
    desc: 'Stay motivated by maintaining your daily learning streak.',
    icon: <Flame />,
    iconClass: 'feature-icon feature-icon--orange'
  }
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Powerful Features for Smarter Learning</h2>
          <p className="section-description">Everything you need to learn, practice and grow with confidence.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-box">
                {React.cloneElement(feature.icon, { className: feature.iconClass })}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-copy">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
