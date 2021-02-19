// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");

const ResourcesRouter = require("./resource/router");
const ProjectsRouter = require("./project/router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/resources", ResourcesRouter);
server.use("/api/projects", ProjectsRouter);

module.exports = server;
