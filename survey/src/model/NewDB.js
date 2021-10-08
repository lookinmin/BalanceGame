"use strict"

const Answer = require("../model/Answer.js");

class NewDB {  //스키마로 새로운 db 만듬
  static async MakeNewDB(dataArr) {
    await this.WriteNewDB(dataArr);
  }

  static WriteNewDB(dataArr) {
    console.log('datafile makenewdb');
    console.log(dataArr);
    const gameData = new Answer({
      title: dataArr[0],
      Q1: dataArr[1],
      L1: dataArr[2],
      R1: dataArr[3],
      Q2: dataArr[4],
      L2: dataArr[5],
      R2: dataArr[6],
      Q3: dataArr[7],
      L3: dataArr[8],
      R3: dataArr[9],
      Q4: dataArr[10],
      L4: dataArr[11],
      R4: dataArr[12],
      Q5: dataArr[13],
      L5: dataArr[14],
      R5: dataArr[15],
      Q6: dataArr[16],
      L6: dataArr[17],
      R6: dataArr[18],
      Q7: dataArr[19],
      L7: dataArr[20],
      R7: dataArr[21],
      Q8: dataArr[22],
      L8: dataArr[23],
      R8: dataArr[24],
      Q9: dataArr[25],
      L9: dataArr[26],
      R9: dataArr[27],
      Q10: dataArr[28],
      L10: dataArr[29],
      R10: dataArr[30],
      Q11: dataArr[31],
      L11: dataArr[32],
      R11: dataArr[33],
      Q12: dataArr[34],
      L12: dataArr[35],
      R12: dataArr[36],
      a_1: dataArr[37],
      b_1: dataArr[38],
      a_2: dataArr[39],
      b_2: dataArr[40],
      a_3: dataArr[41],
      b_3: dataArr[42],
      a_4: dataArr[43],
      b_4: dataArr[44],
      a_5: dataArr[45],
      b_5: dataArr[46],
      a_6: dataArr[47],
      b_6: dataArr[48],
      a_7: dataArr[49],
      b_7: dataArr[50],
      a_8: dataArr[51],
      b_8: dataArr[52],
      a_9: dataArr[53],
      b_9: dataArr[54],
      a_10: dataArr[55],
      b_10: dataArr[56],
      a_11: dataArr[57],
      b_11: dataArr[58],
      a_12: dataArr[59],
      b_12: dataArr[60]
    });
    gameData.save()
      .then(() => {
        console.log('gameData is saved');
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
  }

}

module.exports = NewDB;