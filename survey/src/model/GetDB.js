"use strict"

const ReadDB = require("./ReadDB");

class GetDB{
  constructor(body){
    this.body = body;
  }
  async getDB(){
    const id = await ReadDB.ReadObjectIDs(this.body);
    await ReadDB.readDB(id);
    const value = await ReadDB.loadDB(id);  //final을 담은 배열 -> value를 game.ejs로
    return value;
  }
  
  async getMainDB(){
    return await ReadDB.ReadDBForMain();
  }

  async getPerArr(){
    return await ReadDB.ReadPerDB(this.body);
  }

  async getStringDB(){
    return await ReadDB.loadDB(this.body);
  }

  async getTitle(){
    return await ReadDB.Return_title(this.body);
  }
}

module.exports = GetDB;