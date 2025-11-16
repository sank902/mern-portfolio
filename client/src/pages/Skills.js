import { motion } from 'framer-motion';
import styles from '../styles/Skills.module.css';

const skills = [
  { name: 'JavaScript', level: 90, icon: '🟨', color: '#f0db4f' },
  { name: 'React', level: 85, icon: '⚛️', color: '#61dafb' },
  { name: 'Node.js', level: 80, icon: '🟢', color: '#68a063' },
  { name: 'MongoDB', level: 75, icon: '🍃', color: '#4db33d' },
  
];

export default function Skills() {
  return (
    
    <main className="page-container">
      <section id="skills" className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <h2 className={styles.title}>My Skills</h2>
            <div className={styles.divider} />
          </motion.div>

          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.skillCard}
              >
                <div className={styles.skillHeader}>
                  <span
                    className={styles.skillIcon}
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.icon}
                  </span>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <span className={styles.skillLevel}>{skill.level}%</span>
                </div>

                <div className={styles.progressBar}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={styles.progressFill}
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main> 
  );
}