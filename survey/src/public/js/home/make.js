var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  $('#img_save').css("width", "8vw");
  $('#img_save').css('height', '8vw');
  $('#save').css("margin-left", '10vw');
  $('.item2').css("padding-bottom", '4vh');
  $('.item').css('margin-bottom', '3vh');
  $('.subitem1').css("padding-top", '2vh');
  $('.subitem2').css("padding-top", '2vh');
  $('.item1').css('padding-bottom', '5vh');
  $('#title').css('font-size', '6vw');
  $('#game-name').css('font-size', '5vw');
  $('#g').css('font-size', '5vw');
  $('#g').css('width', '50vw');
  $('.q-name').css('font-size', '3.5vw');
  $('.q-name').css('width', '35vw');
  $('.left').css('font-size', '3vw');
  $('.left').css('width', '25vw');
  $('.right').css('width', '25vw');
  $('.right').css('font-size', '3vw');
  //반응형 추가
}


//프론트 엔드에서 id값 받아서 제어 -> 백엔드로 넘겨야함
//게임이름 "#g-name"
var result = new Array();
for(let i =0; i<37;i++){
  result[i] = "q";
}

function InputResult(where) {
  switch (where) {
    case g:
      result[0] = document.getElementById("g").value;
      break;
    case q1:
      result[1] = document.getElementById("q1").value;
      break;
    case L1:
      result[2] = document.getElementById("L1").value;
      break;
    case R1:
      result[3] = document.getElementById("R1").value;
      break;

    case q2:
      result[4] = document.getElementById("q2").value;
      break;
    case L2:
      result[5] = document.getElementById("L2").value;
      break;
    case R2:
      result[6] = document.getElementById("R2").value;
      break;

    case q3:
      result[7] = document.getElementById("q3").value;
      break;
    case L3:
      result[8] = document.getElementById("L3").value;
      break;
    case R3:
      result[9] = document.getElementById("R3").value;
      break;

    case q4:
      result[10] = document.getElementById("q4").value;
      break;
    case L4:
      result[11] = document.getElementById("L4").value;
      break;
    case R4:
      result[12] = document.getElementById("R4").value;
      break;

    case q5:
      result[13] = document.getElementById("q5").value;
      break;
    case L5:
      result[14] = document.getElementById("L5").value;
      break;
    case R5:
      result[15] = document.getElementById("R5").value;
      break;

    case q6:
      result[16] = document.getElementById("q6").value;
      break;
    case L6:
      result[17] = document.getElementById("L6").value;
      break;
    case R6:
      result[18] = document.getElementById("R6").value;
      break;

    case q7:
      result[19] = document.getElementById("q7").value;
      break;
    case L7:
      result[20] = document.getElementById("L7").value;
      break;
    case R7:
      result[21] = document.getElementById("R7").value;
      break;

    case q8:
      result[22] = document.getElementById("q8").value;
      break;
    case L8:
      result[23] = document.getElementById("L8").value;
      break;
    case R8:
      result[24] = document.getElementById("R8").value;
      break;

    case q9:
      result[25] = document.getElementById("q9").value;
      break;
    case L9:
      result[26] = document.getElementById("L9").value;
      break;
    case R9:
      result[27] = document.getElementById("R9").value;
      break;

    case q10:
      result[28] = document.getElementById("q10").value;
      break;
    case L10:
      result[29] = document.getElementById("L10").value;
      break;
    case R10:
      result[30] = document.getElementById("R10").value;
      break;

    case q11:
      result[31] = document.getElementById("q11").value;
      break;
    case L11:
      result[32] = document.getElementById("L11").value;
      break;
    case R11:
      result[33] = document.getElementById("R11").value;
      break;

    case q12:
      result[34] = document.getElementById("q12").value;
      break;
    case L12:
      result[35] = document.getElementById("L12").value;
      break;
    case R12:
      result[36] = document.getElementById("R12").value;
      break;
  }
}
//-----------------------result

function case_Q(arr){
  var sub_re = [];
  for(var i=0;i<37;i++){
    if(arr[3*i+2]=="q"){
      sub_re[i*2] = 0;
    }
    else{
      sub_re[i*2] = 20;
    }

    if(arr[3*i+3]=="q"){
      sub_re[i*2+1] = 0;
    }
    else{
      sub_re[i*2+1] = 20;
    }
  }
  return sub_re;
}


//------------------stack

$('#btn_save').click(function () {
  if(result[12] != "q"){
    var click = [];
    click = case_Q(result);
    const req = {
      title: result[0],
      Q1: result[1],
      L1: result[2],
      R1: result[3],
      Q2: result[4],
      L2: result[5],
      R2: result[6],
      Q3: result[7],
      L3: result[8],
      R3: result[9],
      Q4: result[10],
      L4: result[11],
      R4: result[12],
      Q5: result[13],
      L5: result[14],
      R5: result[15],
      Q6: result[16],
      L6: result[17],
      R6: result[18],
      Q7: result[19],
      L7: result[20],
      R7: result[21],
      Q8: result[22],
      L8: result[23],
      R8: result[24],
      Q9: result[25],
      L9: result[26],
      R9: result[27],
      Q10: result[28],
      L10: result[29],
      R10: result[30],
      Q11: result[31],
      L11: result[32],
      R11: result[33],
      Q12: result[34],
      L12: result[35],
      R12: result[36],
      a_1: click[0],
      b_1: click[1],
      a_2: click[2],
      b_2: click[3],
      a_3: click[4],
      b_3: click[5],
      a_4: click[6],
      b_4: click[7],
      a_5: click[8],
      b_5: click[9],
      a_6: click[10],
      b_6: click[11],
      a_7: click[12],
      b_7: click[13],
      a_8: click[14],
      b_8: click[15],
      a_9: click[16],
      b_9: click[17],
      a_10: click[18],
      b_10: click[19],
      a_11: click[20],
      b_11: click[21],
      a_12: click[22],
      b_12: click[23]
    }
    fetch("/make", {
      body: JSON.stringify(req),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then(res => {
        console.log('res: ', res);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  
    alert(" SAVE COMPLETE!!\n 메인화면으로 이동합니다.");
    location.href = "http://localhost:8080/";   //만든 게임 페이지 바로 이동
  }

  else if(result[12] == "q"){
    alert("최소 4문제는 입력해주세요.");
  }
  
});

$("#title").click(function () {
  location.href = "http://localhost:8080/";  // 메인페이지로 이동
});