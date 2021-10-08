document.querySelector(".make_btn").addEventListener("click", () => {
  location.href = "../make";
});

var dbStr = $("#dbData").attr("value");

const tmpArr = dbStr.split(',');


var dbArr = PrintToMain();
function PrintToMain() {
  let arr = new Array();
  for (let i = 0; i < tmpArr.length / 4; i++) {
    arr.push(SplitTmpArr(i));
    if(i<6){
      document.getElementsByClassName("question-title")[i].innerHTML = arr[i][1];
      document.getElementsByClassName("question1")[i].innerHTML = arr[i][2];
      document.getElementsByClassName("question2")[i].innerHTML = arr[i][3];
      document.getElementsByClassName("info2")[i].innerHTML = arr[i][0];
    }
  }
  return arr;
}

function SplitTmpArr(num) {
  let arr = new Array();
  arr.push(tmpArr[num * 4]+" 시작하기");
  arr.push(tmpArr[num * 4 + 1]);
  arr.push(tmpArr[num * 4 + 2]);
  arr.push(tmpArr[num * 4 + 3]);
  return arr;
}

console.log(dbArr);

var state = null;
var tit = null;
var url = location.href;
var idx = 0;
var cnt = 0;//클릭 cnt
var dbList;//텍스트 띄울 db 받는 배열
document.querySelector('.add_btn').addEventListener("click", () => {
  if (dbArr.length / 3 > 2) {
    cnt++;
    var question = "";
    var ansA = "";
    var ansB = "";
    var tmp1="", tmp2="", tmp3="";
    switch (cnt) {
      case 1:
        let questionList = document.createElement('div');
        questionList.setAttribute('class', 'question_list');

        tmp1 = dbArr[6][1];
        tmp2 = dbArr[6][2];
        tmp3 = dbArr[6][3];
        if(tmp1!="")
                question = dbArr[6][1];
        if(tmp2!="")
                ansA = dbArr[6][2];
        if(tmp3!="")
                ansB = dbArr[6][3];
        questionList.appendChild(CreateNewDiv('q7', question, ansA, ansB));

        tmp1 = dbArr[7][1];
        tmp2 = dbArr[7][2];
        tmp3 = dbArr[7][3];
        if(tmp1!="")
                question = dbArr[7][1];
        if(tmp2!="")
                ansA = dbArr[7][2];
        if(tmp3!="")
                ansB = dbArr[7][3];
        questionList.appendChild(CreateNewDiv('q8', question, ansA, ansB));

        tmp1 = dbArr[8][1];
        tmp2 = dbArr[8][2];
        tmp3 = dbArr[8][3];
        if(tmp1!="")
                question = dbArr[8][1];
        if(tmp2!="")
                ansA = dbArr[8][2];
        if(tmp3!="")
                ansB = dbArr[8][3];
        questionList.appendChild(CreateNewDiv('q9', question, ansA, ansB));

        let moreBtn = document.querySelector('.more_btn');
        let body = document.body;
        body.insertBefore(questionList, moreBtn);
        break;
      case 2:
        let questionList2 = document.createElement('div');
        questionList2.setAttribute('class', 'question_list');

        tmp1 = dbArr[9][1];
        tmp2 = dbArr[9][2];
        tmp3 = dbArr[9][3];
        if(tmp1!="")
                question = dbArr[9][1];
        if(tmp2!="")
                ansA = dbArr[9][2];
        if(tmp3!="")
                ansB = dbArr[9][3];
        questionList2.appendChild(CreateNewDiv('q10', question, ansA, ansB));

        tmp1 = dbArr[10][1];
        tmp2 = dbArr[10][2];
        tmp3 = dbArr[10][3];
        if(tmp1!="")
                question = dbArr[10][1];
        if(tmp2!="")
                ansA = dbArr[10][2];
        if(tmp3!="")
                ansB = dbArr[10][3];
        questionList2.appendChild(CreateNewDiv('q11', question, ansA, ansB));

        tmp1 = dbArr[11][1];
        tmp2 = dbArr[11][2];
        tmp3 = dbArr[11][3];
        if(tmp1!="")
                question = dbArr[11][1];
        if(tmp2!="")
                ansA = dbArr[11][2];
        if(tmp3!="")
                ansB = dbArr[11][3];
        questionList2.appendChild(CreateNewDiv('q12', question, ansA, ansB));

        let moreBtn2 = document.querySelector('.more_btn');
        let body2 = document.body;
        body2.insertBefore(questionList2, moreBtn2);
        body2.removeChild(moreBtn2);
        break;
      default:
        break;
    }
  }
});

function CreateNewDiv(id, strQ, strB, strC) {
  let list = document.createElement('button');
  list.setAttribute('class', 'rbutton ui-button list');
  list.setAttribute('type', 'button');
  list.setAttribute('id', id);
  //button 만들기

  let outlined = document.createElement('div');
  outlined.setAttribute('class', 'text-outlined text-outlined_v5 ha-transition-pseudo');
  //text-outlined div 만들기

  let outlined2 = document.createElement('div');
  outlined2.setAttribute('class', 'text-outlined__label ha-transition-pseudo');
  //'text-outlined__label' div 만들기

  let info1 = document.createElement('div');
  info1.setAttribute('class', 'info1');

  let questionTitle = document.createElement('div');
  questionTitle.setAttribute('class', 'question-title');
  questionTitle.innerHTML = strQ;

  let question1 = document.createElement('div');
  question1.setAttribute('class', 'question1');
  question1.innerHTML = strB;

  let vsLine = document.createElement('div');
  vsLine.setAttribute('class', 'vs_line');
  vsLine.innerHTML = "VS";

  let question2 = document.createElement('div');
  question2.setAttribute('class', 'question2');
  question2.innerHTML = strC;

  info1.appendChild(questionTitle);
  info1.appendChild(question1);
  info1.appendChild(vsLine);
  info1.appendChild(question2);

  let info2 = document.createElement('div');
  info2.setAttribute('class', 'info2 btn btn-outline-primary');
  info2.innerHTML = "밸런스 게임 시작하기";

  outlined2.appendChild(info1);
  outlined2.appendChild(info2);

  outlined.appendChild(outlined2);

  list.appendChild(outlined);

  return list;
}

const question_list = document.querySelectorAll(".list");
for (let i = 0; i < question_list.length; i++) {
  document.getElementsByClassName("list")[i].addEventListener("click", () => {
    var url = "http://localhost:8080/start";
    url = url.replace(/\?num=([0-9]+)/ig, '');
    var newURL = url += "?num=" + i;
    location.href = newURL;
  });
}