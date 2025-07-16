import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment gateway integration and inventory management",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    image: "/project1.jpg"
  },
  {
    title: "LocalLens - Civic Issue Analyzer",
    description: "Upload civic issue images (like potholes, garbage) and analyze them using BLIP & GenAI on MERN stack.",
    tech: ["React", "Flask", "MongoDB", "BLIP", "GenAI"],
    github: "#",
    live: "#",
    image: "/project2.jpg"
  },
  {
    title: "Smart Resume Generator",
    description: "AI-powered resume builder that generates ATS-friendly resumes using NLP and prompts.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
    github: "#",
    live: "#",
    image: "/project3.jpg"
  },
  {
    title: "CodeFix - AI Code Reviewer",
    description: "Web app to review and suggest improvements to code snippets using GPT models.",
    tech: ["React", "Node.js", "Express", "OpenAI", "MongoDB"],
    github: "#",
    live: "#",
    image: "/project4.jpg"
  },
  {
    title: "EduBot - AI Teaching Assistant",
    description: "An interactive chatbot for college portals to assist students with GenAI.",
    tech: ["React", "Flask", "LangChain", "MongoDB"],
    github: "#",
    live: "#",
    image: "/project5.jpg"
  }
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.card}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                  <div className={styles.techList}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.techItem}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles.links}>
                    <a href={project.github} className={styles.link}>
                      <FiGithub className={styles.linkIcon} />
                      Code
                    </a>
                    <a href={project.live} className={styles.link}>
                      <FiExternalLink className={styles.linkIcon} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
