import { Menu, X, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-brand">
          <div className="navbar-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H10V10H4V4Z" fill="currentColor"/>
              <path d="M4 14H10V20H4V14Z" fill="currentColor"/>
              <path d="M14 4H20V10H14V4Z" fill="currentColor"/>
              <path d="M14 14H20V20H14V14Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="navbar-title">NROQ</span>
        </div>

        <div className="navbar-links">
          <a href="#features" className="navbar-link">Features</a>
          <a href="#vocabulary" className="navbar-link">Vocabulary Moments</a>
          <a href="#how-it-works" className="navbar-link">How it works</a>
          <Link to="/about-us" className="navbar-link">About</Link>
        </div>

        <div className="navbar-action">
          <a href="#download" className="button-pill button-primary navbar-button">
            <Smartphone className="button-icon" />
            Get the App
          </a>
        </div>

        <div className="navbar-toggle">
          <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle-button">
            {isOpen ? <X className="navbar-toggle-icon" /> : <Menu className="navbar-toggle-icon" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-links">
            <a href="#features" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#vocabulary" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>Vocabulary Moments</a>
            <a href="#how-it-works" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>How it works</a>
            <Link to="/about-us" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>About</Link>
          </div>
          <div className="navbar-mobile-action">
            <a href="#download" className="button-pill button-primary navbar-button navbar-mobile-button" onClick={() => setIsOpen(false)}>
              <Smartphone className="button-icon" />
              Get the App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
