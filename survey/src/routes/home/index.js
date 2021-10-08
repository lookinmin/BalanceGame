"use strict";

console.log('routes index start');
const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl");

router.get("/", ctrl.output.main);
router.get("/game", ctrl.output.game);
router.get("/start", ctrl.output.start);
router.get("/end", ctrl.output.end);
router.get("/make", ctrl.output.make);

router.post("/", ctrl.process.main);
router.post("/game", ctrl.process.game);
router.post("/start", ctrl.process.start);
router.post("/end", ctrl.process.end);
router.post("/make", ctrl.process.make);

module.exports = router; //외부에서 쓸수있게