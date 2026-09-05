import React from 'react';
import { Search, BrainCircuit, Dumbbell, Trophy } from 'lucide-react';

const steps = [
  {
    num: 1,
    title: 'Discover',
    desc: 'Find the words people actually use in conversations, culture, and work.',
    icon: <Search />
  },
  {
    num: 2,
    title: 'Learn',
    desc: 'Understand meaning, usage, pronunciation, and example sentences.',
    icon: <BrainCircuit />
  },
  {
    num: 3,
    title: 'Practice',
    desc: 'Take smart quizzes and challenges to lock words into memory.',
    icon: <Dumbbell />
  },
  {
    num: 4,
    title: 'Master',
    desc: 'Use words confidently with streaks, badges, and real-life review.',
    icon: <Trophy />
  }
];

export default function HowItWorks() {
  return (
    <section className="steps-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How NROQ Works</h2>
          <p className="section-description">Simple steps to expand your vocabulary every day.</p>
        </div>

        <div className="steps-grid">
          <div className="step-line" aria-hidden="true"></div>
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-icon-wrap">
                {React.cloneElement(step.icon, { className: 'step-icon' })}
                <div className="step-number-badge">{step.num}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-copy">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
