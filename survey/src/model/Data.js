"use strict"

const DataFile = require("./DataFile");

class Data {
  constructor(body) {
    this.body = body;
  }
  async AddData() {
    const data = this.body;
    return await DataFile.SaveData(data);
  }
}
module.exports = Data;