import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.webp';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="max-container">
        <div className={styles.grid}>
          {/* About Column */}
          <div className={styles.aboutColumn}>
            <a href="/" className={styles.logo}>
              <img src={logo} alt="Logo" width={40} height={40} />
              <span className={styles.logoText}>IELTS Prep</span>
            </a>
            <p className={styles.aboutText}>
              Our mission is to provide aspiring students with the best tools and guidance to excel in their IELTS examination.
            </p>
          </div>

          {/* Links Column */}
          <div className={styles.linksColumn}>
            <h3>Quick Links</h3>
            <ul className={styles.linksList}>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.linksColumn}>
            <h3>Contact Us</h3>
            <p className={styles.contactText}>123 Learning St, Education City</p>
            <p className={styles.contactText}>contact@ieltsprep.com</p>
            <p className={styles.contactText}>+1 234 567 890</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© 2025 IELTS Prep. All rights reserved.</p>
          <div className={styles.socialIcons}>
            <a href="#"><FaTwitter size={20} /></a>
            <a href="#"><FaFacebook size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;