import styles from '../styles/Contact.module.css';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

export default function Contact() {
  return (
    
    <main className="page-container">
      <section className={styles.section} id="contact">
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>Get In Touch</h2>
            <div className={styles.divider} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.formContainer}
          >
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input type="text" id="name" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" className={styles.textarea}></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                <FiSend style={{ marginRight: '0.5rem' }} />
                Send Message
              </button>
            </form>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <FiGithub className={styles.socialIcon} />
                GitHub
              </a>
              <a href="#" className={styles.socialLink}>
                <FiLinkedin className={styles.socialIcon} />
                LinkedIn
              </a>
              <a href="#" className={styles.socialLink}>
                <FiMail className={styles.socialIcon} />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main> 
  );
}