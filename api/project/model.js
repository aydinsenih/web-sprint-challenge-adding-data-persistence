// build your `Project` model here
const db = require("../../data/dbConfig");

function getProjects() {
    return db("projects").then((project) => {
        const projectBool = project.map((prj) => {
            prj.project_completed = !!prj.project_completed;
            return prj;
        });
        return projectBool;
    });
}

function getProjectById(projectId) {
    return db("projects")
        .where("project_id", projectId)
        .first()
        .then((prj) => {
            prj.project_completed = !!prj.project_completed;
            return prj;
        });
}

function addProject(project) {
    return db("projects")
        .insert(project)
        .then((ids) => {
            return getProjectById(ids[0]);
        });
}

module.exports = { getProjects, getProjectById, addProject };
