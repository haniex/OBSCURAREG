import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <Link to="/" className="footer__logo">
            OBSCURA<span>®</span>
          </Link>
          <nav className="footer__nav" aria-label="Footer">
            <a href="/#work">Work</a>
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <a href="/#contact">Contact</a>
          </nav>
          <button
            className="footer__top-btn"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
            <span>Top</span>
          </button>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} OBSCURA®. Conceptual portfolio. All
            projects are fictional case studies.
          </p>
          <p className="footer__note">
            Independent Digital Designer & Creative Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
