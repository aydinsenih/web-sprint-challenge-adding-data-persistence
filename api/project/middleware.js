const Project = require("./model");

async function validateProjectID(req, res, next) {
    const id = req.params.id;
    try {
        const project = await Project.getProjectById(id);
        if (!project) {
            res.status(404).json({ message: "Project not found" });
        } else {
            req.project = project;
            next();
        }
    } catch (error) {
        res.status(500).json({ message: " Server error: " + error });
    }
}

module.exports = { validateProjectID };
