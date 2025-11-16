import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import styles from '../styles/Home.module.css';
import '../styles/global.css';

export default function Home() {
  return (
    
    <main className="page-container">
      <div className={styles.hero}>
        
        <div className={`${styles.content} container`}>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <div className={styles.nameContainer}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className={styles.underline}
              />
              <h1 className={`${styles.name} gradient-text`}>Sankalp Khare</h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.7 }}
                className={styles.underline}
              />
            </div>

            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h2 className={styles.title}>
                 Full Stack Developer
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className={styles.titleUnderline}
                />
              </h2>
            </motion.div>

           
            <motion.p className={styles.bioText}>
              {[
                "🚀 Passionate about building performant, scalable full-stack apps",
                "🧠 Expert in React, Node.js, MongoDB & modern JavaScript",
                "🤖 Exploring the intersection of AI and Web3",
                "📍 Based in Delhi, India · Open to remote opportunities",
                "🎓 B.Tech in Computer Science · 2+ years experience"
              ].map((text, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
                  style={{ display: 'block', marginBottom: '0.5rem' }}
                >
                  {text}
                </motion.span>
              ))}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: '1rem' }}
            >
              <a
                href="Sankalp.pdf"
                download
                className="btn btn-primary"
              >
                <FiDownload style={{ marginRight: '0.5rem' }} />
                Download Resume
              </a>
              
              <div className={styles.socialIcons}>
                <a
                  href="https://github.com/sank902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sankalp-khare-953167210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="mailto:kharesankalp57@gmail.com" 
                  className={styles.socialIcon}
                >
                  <FiMail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main> 
  );
}