// build your `/api/tasks` router here
const express = require("express");

const Tasks = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const tasks = await Tasks.getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Tasks.getTaskById(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.post("/", async (req, res) => {
    try {
        const newTask = req.body;
        const addedTask = await Tasks.addTask(newTask);
        res.status(201).json(addedTask);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;
