import { useState } from 'react';
import { navLinks } from '../constants';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.webp';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Logo" width={40} height={40} />
          <span className={styles.logoText}>IELTS Prep</span>
        </a>

        <ul className={styles.navList}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className={styles.navButton}>Register Now</button>

        <div className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={styles.navLink} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className={styles.navButton} style={{display: 'block', width: '100%'}}>
                Register Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;