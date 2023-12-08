"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
require("dotenv").config();
var app = express();
var port = 8080;
var pathToFront = __dirname + "/build/";
app.use(express.static(pathToFront));
app.get('/', function (req, res) {
    res.sendFile(pathToFront + "index.html");
    res.send('Express + TypeScript Server');
});
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(port));
});
