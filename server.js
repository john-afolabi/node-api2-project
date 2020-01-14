const express = require("express");
const router = require("./data/router");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors())
server.use("/api/posts", router);

module.exports = server;
