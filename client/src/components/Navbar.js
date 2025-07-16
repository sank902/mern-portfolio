import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>AC</Link>
        <button
  onClick={() => setDarkMode(prev => !prev)}
  className={styles.themeToggleBtn}
>
  {darkMode ? '☀️ Light' : '🌙 Dark'}
</button>

        <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <Link to="/" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/projects" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link to="/skills" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Skills</Link>
          <Link to="/experience" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Experience</Link>
          <Link to="/contact" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
}

