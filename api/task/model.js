// build your `Task` model here
const db = require("../../data/dbConfig");

function getTasks() {
    return db("tasks as t")
        .join("projects as p", "p.project_id", "t.task_id")
        .select(
            "t.task_id",
            "t.task_description",
            "t.task_notes",
            "t.task_completed",
            "p.project_name",
            "p.project_description"
        )
        .then((tasks) => {
            const tasksBool = tasks.map((task) => {
                task.task_completed = !!task.task_completed;
                return task;
            });
            return tasksBool;
        });
}

function getTaskById(taskid) {
    return db("tasks as t")
        .join("projects as p", "p.project_id", "t.project_id")
        .select(
            "t.task_id",
            "t.task_description",
            "t.task_notes",
            "t.task_completed",
            "p.project_name",
            "p.project_description"
        )
        .where("task_id", taskid)
        .first()
        .then((task) => {
            task.task_completed = !!task.task_completed;
            return task;
        });
}

function addTask(task) {
    return db("tasks")
        .insert(task)
        .then((ids) => {
            return getTaskById(ids[0]);
        });
}

module.exports = { getTasks, getTaskById, addTask };
