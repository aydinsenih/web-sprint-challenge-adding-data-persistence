// build your `/api/resources` router here
const express = require("express");

const Resources = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const resources = await Resources.getResources();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const resource = await Resources.getResourceById(id);
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.post("/", async (req, res) => {
    try {
        const newResource = req.body;
        const addedResource = await Resources.addResource(newResource);
        res.status(201).json(addedResource);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;
