import styles from '../styles/Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Sankalp</h3>
            <p className={styles.tagline}>Building digital experiences</p>
          </div>
          
          
          
          <div className={styles.social}>
            <h4 className={styles.socialTitle}>Connect</h4>
            <div className={styles.socialIcons}>
              <a href="https://github.com/sank902" aria-label="GitHub">
                <FaGithub className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/sankalp-khare-953167210/" aria-label="LinkedIn">
                <FaLinkedin className={styles.icon} />
              </a>
              <a href="kharesankalp57@gmail.com" aria-label="Email">
                <FaEnvelope className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Sankalp Khare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}