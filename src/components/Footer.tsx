import { Instagram, Twitter, Youtube, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H10V10H4V4Z" fill="currentColor"/>
              <path d="M4 14H10V20H4V14Z" fill="currentColor"/>
              <path d="M14 4H20V10H14V4Z" fill="currentColor"/>
              <path d="M14 14H20V20H14V14Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="navbar-title">NROQ</span>
          <p className="footer-brand-copy">Words that click.</p>
          <p className="footer-brand-copy">Knowledge that sticks.</p>
          <div className="footer-social">
            <a href="#" className="footer-link"><Instagram className="footer-social-icon" /></a>
            <a href="#" className="footer-link"><Twitter className="footer-social-icon" /></a>
            <a href="#" className="footer-link"><Youtube className="footer-social-icon" /></a>
            <a href="#" className="footer-link"><Facebook className="footer-social-icon" /></a>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Product</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Features</a></li>
            <li><a href="#" className="footer-link">Vocabulary Moments</a></li>
            <li><a href="#" className="footer-link">Learning Journey</a></li>
            <li><a href="#" className="footer-link">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Careers</a></li>
            <li><a href="#" className="footer-link">Blog</a></li>
            <li><a href="#" className="footer-link">Press Kit</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Help Center</a></li>
            <li><a href="#" className="footer-link">Contact Support</a></li>
            <li><a href="#" className="footer-link">Community</a></li>
            <li><a href="#" className="footer-link">Guides</a></li>
          </ul>
        </div>

        <div className="footer-column--legal">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Terms of Service</a></li>
            <li><a href="#" className="footer-link">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>&copy; 2024 NROQ. All rights reserved.</p>
          <p className="footer-bottom-copy">
            Made with <Heart className="footer-heart-icon" /> for curious minds.
          </p>
        </div>
      </div>
    </footer>
  );
}
