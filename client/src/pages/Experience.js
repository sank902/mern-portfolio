import styles from '../styles/Experience.module.css';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    date: "2020 - Present",
    description: "Lead development of customer-facing applications using React and TypeScript. Implemented performance optimizations that reduced load times by 40%.",
    tech: ["React", "TypeScript", "GraphQL", "Jest"]
  }
];

export default function Experience() {
  return (
    
    <main className="page-container">
      <section className={styles.section} id="experience">
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>Work Experience</h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={styles.item}
              >
                <div className={styles.dot} />
                <div className={styles.content}>
                  <div className={styles.itemHeader}>
                    <div className={styles.icon}>
                      <FiBriefcase />
                    </div>
                    <div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <p className={styles.company}>{exp.company}</p>
                    </div>
                    <span className={styles.date}>{exp.date}</span>
                  </div>
                  <p className={styles.description}>{exp.description}</p>
                  <div className={styles.techList}>
                    {exp.tech.map((tech, i) => (
                      <span key={i} className={styles.techItem}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main> 
  );
}