// build your `/api/projects` router here
const express = require("express");

const Projects = require("./model");

const mw = require("./middleware");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const projects = await Projects.getProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get("/:id", mw.validateProjectID, async (req, res) => {
    try {
        res.status(200).json(req.project);
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
