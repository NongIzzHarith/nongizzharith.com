import Link from "next/link";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Work</Link></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li><a href="mailto:hello@nongizzharith.com">hello@nongizzharith.com</a></li>
          </ul>
        </div>
      </div>

      <p className="copyright">&copy; {currentYear} NONG IZZ HARITH. All rights reserved.</p>
    </footer>
  );
}
