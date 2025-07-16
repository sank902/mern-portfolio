const Project = require('../models/Project');

// Get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new project
exports.createProject = async (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    techStack: req.body.techStack,
    githubUrl: req.body.githubUrl,
    liveDemoUrl: req.body.liveDemoUrl,
    imageUrl: req.body.imageUrl
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};