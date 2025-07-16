const mongoose = require('mongoose');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Experience = require('./models/Experience');
const Education = require('./models/Education');

const seedData = async () => {
  try {
    // Sample Projects
    await Project.insertMany([
      {
        title: "Portfolio Website",
        description: "A responsive portfolio built with MERN stack",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/yourusername/portfolio",
        liveDemoUrl: "https://yourportfolio.com",
        imageUrl: "https://via.placeholder.com/600x400"
      },
      // Add more projects as needed
    ]);

    // Sample Skills
    await Skill.insertMany([
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      // Add more skills
    ]);

    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
};

// Connect to DB and seed
mongoose.connect(process.env.MONGODB_URI)
  .then(() => seedData())
  .catch(err => console.error("DB connection error:", err));