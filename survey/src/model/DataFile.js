"use strict";

const fs = require("fs").promises;
const Answer = require("../model/Answer.js");

class DataFile {
  static async SaveData(ans) {
    const ansValue = Object.values(ans); //db읽을 id+클릭한 값
    const dbID = ansValue[0]; //ObjectID
    const keyArr2 = this.KeyArray2(); //Answer.js key값 저장 -> 이름 맞춰서 개수 증가
    const readDB = await this.ReadDB(dbID); //몽고db 데이터 리턴
    const final = this.SaveToArray(readDB); //db에서 클릭값만 배열로 만들어 리턴  `

    const calDB = this.CalDB(keyArr2, final, ansValue); //클릭한 값과 db값 저장한 배열 비교
    this.UpdateDB(calDB, dbID); //db에 새로운 데이터 업데이트           //calDB + stringDB해야함
    const per_arr = this.calc_percent(calDB);       //계산한 값중에 0 제거
    return per_arr;
  }

  static KeyArray2() {      //클릭한 number만
    var keyArr2 = ["a_1", "b_1", "a_2", "b_2", "a_3", "b_3", "a_4", "b_4",
      "a_5", "b_5", "a_6", "b_6", "a_7", "b_7", "a_8", "b_8", "a_9",
      "b_9", "a_10", "b_10", "a_11", "b_11", "a_12", "b_12"];
    return keyArr2;
  }

  static ReadDB(dbID) {        //클릭한 횟수 리턴
    return Answer.findOne({ _id: dbID }).exec();
    //몽고db 데이터 리턴
  }

  static SaveToArray(dataDB) {
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

  static CalDB(keyArr2, arrDB, ansValue) {
    for (let i = 0; i < keyArr2.length; i++) {
      for (let j = 1; j < ansValue.length; j++) {
        if (keyArr2[i] == ansValue[j]) { //Answer.js 키값과 클릭한 값이 일치하면
          arrDB[i] += 1; //해당 값 증가
        }
      }
    }
    return arrDB;
  }

  static UpdateDB(calDB, dbID) {
    //db 아이디 읽기
    Answer.updateOne({
      _id: dbID
    }, {
      a_1: calDB[0],
      b_1: calDB[1],
      a_2: calDB[2],
      b_2: calDB[3],
      a_3: calDB[4],
      b_3: calDB[5],
      a_4: calDB[6],
      b_4: calDB[7],
      a_5: calDB[8],
      b_5: calDB[9],
      a_6: calDB[10],
      b_6: calDB[11],
      a_7: calDB[12],
      b_7: calDB[13],
      a_8: calDB[14],
      b_8: calDB[15],
      a_9: calDB[16],
      b_9: calDB[17],
      a_10: calDB[18],
      b_10: calDB[19],
      a_11: calDB[20],
      b_11: calDB[21],
      a_12: calDB[22],
      b_12: calDB[23]
    },
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully updated the document");
        }
      });
  }

  static calc_percent(arr) {
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

}
module.exports = DataFile;