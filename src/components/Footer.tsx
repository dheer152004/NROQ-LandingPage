import { Instagram, Twitter, Youtube, Facebook, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import fullNameLogo from '../assets/fullnamelogo.svg';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-inner">
        <div className="footer-brand">
          {/* <div className="footer-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H10V10H4V4Z" fill="currentColor"/>
              <path d="M4 14H10V20H4V14Z" fill="currentColor"/>
              <path d="M14 4H20V10H14V4Z" fill="currentColor"/>
              <path d="M14 14H20V20H14V14Z" fill="currentColor"/>
            </svg>
          </div> */}
          <img src={fullNameLogo} alt="NROQ logo" style={{ width: '120px', height: 'auto' }} />
          <p className="footer-brand-copy">Words that click.</p>
          <p className="footer-brand-copy">Knowledge that sticks.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/" className="footer-link" aria-label="Instagram"><Instagram className="footer-social-icon" /></a>
            <a href="https://twitter.com/" className="footer-link" aria-label="Twitter"><Twitter className="footer-social-icon" /></a>
            <a href="https://www.youtube.com/" className="footer-link" aria-label="YouTube"><Youtube className="footer-social-icon" /></a>
            <a href="https://www.facebook.com/" className="footer-link" aria-label="Facebook"><Facebook className="footer-social-icon" /></a>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Product</h4>
          <ul className="footer-list">
            <li><a href="#features" className="footer-link">Features</a></li>
            <li><a href="#vocabulary" className="footer-link">Vocabulary Moments</a></li>
            <li><a href="#how-it-works" className="footer-link">Learning Journey</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-list">
            <li><Link to="/about-us" className="footer-link">About Us</Link></li>
            <li><Link to="/careers" className="footer-link">Careers</Link></li>
            <li><Link to="/blog" className="footer-link">Blog</Link></li>
            <li><Link to="/press-kit" className="footer-link">Press Kit</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-list">
            <li><Link to="/help-center" className="footer-link">Help Center</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Support</Link></li>
            <li><Link to="/community" className="footer-link">Community</Link></li>
            <li><Link to="/guides" className="footer-link">Guides</Link></li>
          </ul>
        </div>

        <div className="footer-column--legal">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-list">
            <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="footer-link">Terms of Service</Link></li>
            <li><Link to="/cookie-policy" className="footer-link">Cookie Policy</Link></li>
            <li><Link to="/privacy-consent" className="footer-link">Privacy & Consent Management</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>&copy; 2026 NROQ. All rights reserved.</p>
          <p className="footer-bottom-copy">
            Made with <Heart className="footer-heart-icon" /> for curious minds.
          </p>
        </div>
      </div>
    </footer>
  );
}
