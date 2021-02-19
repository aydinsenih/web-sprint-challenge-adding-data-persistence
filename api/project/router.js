// build your `/api/projects` router here
const express = require("express");

const Projects = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const projects = await Projects.getProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const project = await Projects.getProjectById(id);
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.post("/", async (req, res) => {
    try {
        const newProject = req.body;
        const addedProject = await Projects.addProject(newProject);
        res.status(201).json(addedProject);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;
