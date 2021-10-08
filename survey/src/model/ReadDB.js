const Answer = require("../model/Answer.js");

class ReadDB {
  static async loadDB(id){
    const arr1 = await this.readDB(id);
    var final_str = new Array();
    final_str.push(id);
    final_str.push(this.Except_Q(arr1));
    return final_str;
  }

  static async DBRead(id){
    const tmp = id;
    const data = await Answer.findOne({ _id: tmp }).exec();
    return data;
  }

  static async readDB(id){
    const dataDB = await this.DBRead(id);
    var strDB = new Array();

    strDB.push(dataDB.title); //0
    strDB.push(dataDB.Q1);
    strDB.push(dataDB.L1);
    strDB.push(dataDB.R1);
    strDB.push(dataDB.Q2);
    strDB.push(dataDB.L2);
    strDB.push(dataDB.R2);
    strDB.push(dataDB.Q3);
    strDB.push(dataDB.L3);
    strDB.push(dataDB.R3);
    strDB.push(dataDB.Q4);
    strDB.push(dataDB.L4);
    strDB.push(dataDB.R4);
    strDB.push(dataDB.Q5);
    strDB.push(dataDB.L5);
    strDB.push(dataDB.R5);
    strDB.push(dataDB.Q6);
    strDB.push(dataDB.L6);
    strDB.push(dataDB.R6);
    strDB.push(dataDB.Q7);
    strDB.push(dataDB.L7);
    strDB.push(dataDB.R7);
    strDB.push(dataDB.Q8);
    strDB.push(dataDB.L8);
    strDB.push(dataDB.R8);
    strDB.push(dataDB.Q9);
    strDB.push(dataDB.L9);
    strDB.push(dataDB.R9);
    strDB.push(dataDB.Q10);
    strDB.push(dataDB.L10);
    strDB.push(dataDB.R10);
    strDB.push(dataDB.Q11);
    strDB.push(dataDB.L11);
    strDB.push(dataDB.R11);
    strDB.push(dataDB.Q12);
    strDB.push(dataDB.L12);
    strDB.push(dataDB.R12);
  
    return strDB;
  }

  static Except_Q(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i] != "q"){
        result[i] = arr[i];
      }
    }
    return result;
  }

  static ReadMainDB() {
    return Answer.find().exec();
  }
  
  static ArrangeForMain(dbData) { //4개짜리 배열 만들어서 push
    let tmpArr = new Array();

    tmpArr.push(dbData.title); //0
    tmpArr.push(dbData.Q1);
    tmpArr.push(dbData.L1);
    tmpArr.push(dbData.R1);

    return tmpArr;
  }

  static async ReadDBForMain(){ //main에 띄울 배열, 4개짜리
    const dbList = await this.ReadMainDB(); //Answer안에 있는 모든 db
    const dbCnt = dbList.length;
    var dbArr = new Array();
    for (let i = 0; i < dbCnt; i++) {
      dbArr.push(this.ArrangeForMain(dbList[dbCnt-1-i]));
    }
    return dbArr;
  }

  static async ReadObjectIDs(qNum){
    const idList = await this.ReadMainDB();
    var finalID = idList[idList.length-1-qNum]._id;
    return finalID;
  }

  static ReadOneDB(id){
    return Answer.findOne({ _id: id }).exec();
  }

  static MakeNumArr(dataDB){
    var arrDB = new Array();

    arrDB.push(dataDB.a_1); //37
    arrDB.push(dataDB.b_1);
    arrDB.push(dataDB.a_2);
    arrDB.push(dataDB.b_2);
    arrDB.push(dataDB.a_3);
    arrDB.push(dataDB.b_3);
    arrDB.push(dataDB.a_4);
    arrDB.push(dataDB.b_4);
    arrDB.push(dataDB.a_5);
    arrDB.push(dataDB.b_5);
    arrDB.push(dataDB.a_6);
    arrDB.push(dataDB.b_6);
    arrDB.push(dataDB.a_7);
    arrDB.push(dataDB.b_7);
    arrDB.push(dataDB.a_8);
    arrDB.push(dataDB.b_8);
    arrDB.push(dataDB.a_9);
    arrDB.push(dataDB.b_9);
    arrDB.push(dataDB.a_10);
    arrDB.push(dataDB.b_10);
    arrDB.push(dataDB.a_11);
    arrDB.push(dataDB.b_11);
    arrDB.push(dataDB.a_12);
    arrDB.push(dataDB.b_12);

    return arrDB;
  }

  static CalPercent(arr){
    var result = new Array();
    var p = new Array();
    //여기까진 무조건

    for (var k = 0; k < 12; k++) {
      p[k] = (((arr[k * 2] / (arr[k * 2] + arr[(k * 2) + 1])) * 100).toFixed(0));
    }

    for (var i = 0; i < 12; i++) {
      if (isNaN(p[i]) == false) {         //0이 아닌값(NaN)이 아닌 값만 result배열에 저장
        result[i] = p[i];
      }
    }
    return result;
  }

  static async ReadPerDB(id){
    const numDB = await this.ReadOneDB(id);
    const numArr = this.MakeNumArr(numDB);
    const perArr = this.CalPercent(numArr);
    return perArr;
  }

  static async Return_title(idx){
    const arr = await this.ReadMainDB();
    const gameTitle = arr[arr.length-1-idx].title;
    return gameTitle;
  }
}

module.exports = ReadDB;