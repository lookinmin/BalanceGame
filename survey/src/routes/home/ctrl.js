"use strict";

console.log("routes ctrl start");

const Data = require("../../model/Data");
const MakeNew = require("../../model/MakeNew");
const GetDB = require("../../model/GetDB");

const output = {
  main: async (req, res) => {
    const init = new GetDB();
    const data = await init.getMainDB();
    res.render("home/main", {data});
  },
  game: async (req, res) => {
    const init = new GetDB(req.query.num);
    let data = await init.getDB();
    res.render("home/game", {data});
  },
  start: async (req, res) => {
    const num = req.query.num;
    const init = new GetDB(req.query.num);
    let data = await init.getTitle();
    res.render("home/start", {num, data});
  },
  end: async (req, res) => {
    const data = new GetDB(req.query.num);
    const perArr = await data.getPerArr();
    const qArr = await data.getStringDB();
    res.render("home/end", {perArr, qArr});
  },
  make: (req, res) => {
    res.render("home/make");
  }
}

const process = {
  main: (req, res) => {
    console.log('main', req.body);
  },
  game: async (req, res) => {
    console.log('game', req.body);
  },
  start: (req, res) => {
    console.log('start', req.body);
  },
  end: async (req, res) => {
    const data = new Data(req.body);
    await data.AddData(req.body);
  },
  make: async (req, res) => {
    var value = Object.values(req.body);
    const data = new MakeNew(value);
    await data.MakeMainDB();
  },
};

module.exports = {
  output,
  process,
}