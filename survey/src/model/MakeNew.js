"use strict";

const fs = require("fs").promises;
const Answer = require("../model/Answer.js");
const DataFile = require("./DataFile");
const NewDB = require("./NewDB");

class MakeNew{
  constructor(body) {
    this.body = body;
  }
  async MakeMainDB(){
    console.log('db make');
    await NewDB.MakeNewDB(this.body); //문제 입력한 String value NewDB 로 넘김
  }
}

module.exports = MakeNew;