var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if(isMobile){
  $(".wrapper").css("padding-top", "3.5rem");
  $(".sector").css("margin-bottom", "4vh");
  $("#title").css("font-size","5vw");
  $("#END").css("width","20vw");
  $("#END").css("height","10vw");
  $("#END").css("margin-top","2vh");
  $("#END").css("font-size","3vw");
  $("p_left").css("width", "10px");
  $("p_right").css("width", "10px");
}

var dbStr = $("#dbData").attr("value");
var dbArr = dbStr.split(',');
console.log('dbArr: '+dbArr);
var dbID = dbArr[0];
var Snum = dbArr.length-1;
console.log(Snum);
var num;
if(Snum%3==2){
  Snum -= 2;
  num = Snum / 3;
}
else if(Snum%3==1){
  Snum -= 1;
  num = Snum / 3;
}
else{
  num = Snum / 3;
}
console.log("num: "+num);

function show_arrow(n, idx){
  if(n <= 4){
    $('#btn_left').css("display","none");
    $('#btn_right').css("display","none");
    $("#indi2").css("display", "none");
    $("#indi3").css("display", "none");
  }
  else if(4 < n <= 8){
    if(idx==0){
      $('#btn_left').css("display","none");
      $('#btn_right').css("display","grid");
      $("#indi2").css("display", "grid");
      $("#indi3").css("display", "none");
    }
    else if(idx == 1){
      $('#btn_left').css("display","grid");
      $('#btn_right').css("display","none");
      $("#indi2").css("display", "grid");
      $("#indi3").css("display", "none");
    }
  }
  else if(8 < n <= 12){
    if(idx==0){
      $('#btn_left').css("display","none");
      $('#btn_right').css("display","grid");
      $("#indi2").css("display", "grid");
      $("#indi3").css("display", "grid");
    }
    else if(idx==1){
      $('#btn_left').css("display","grid");
      $('#btn_right').css("display","grid");
      $("#indi2").css("display", "grid");
      $("#indi3").css("display", "grid");
    }
    else if(idx==2){
      $('#btn_left').css("display","grid");
      $('#btn_right').css("display","none");
      $("#indi2").css("display", "grid");
      $("#indi3").css("display", "grid");
    }
  }
}

function first_show_arrow(n){
  if(n <= 4){
    $('#btn_left').css("display","none");
    $('#btn_right').css("display","none");
    $("#indi2").css("display", "none");
    $("#indi3").css("display", "none");
  }
  else if(4 < n <= 8){
    $('#btn_left').css("display","none");
    $('#btn_right').css("display","grid");
    $("#indi2").css("display", "grid");
    $("#indi3").css("display", "none");
  }
  else if(8 < n){
    $('#btn_left').css("display","none");
    $('#btn_right').css("display","grid");
    $("#indi2").css("display", "grid");
    $("#indi3").css("display", "grid");
  }
}

function decide_sector_cnt(n){
  for(let i=1;i<=n;i++){
    $("#D"+i).css("display", "grid");
  }
}

$(document).ready(function(){
  first_show_arrow(num);
  decide_sector_cnt(num);
});

function idx_max(index, max, min) {       //페이지 넘어가는 수 조정 -> min은 0으로 고정
  index = 0;
  if (index >= max) {
    index = max;
  }
  if(index <= min){
    index = min;
  }
  return index;
}

var number = 0;
var idx = idx_max(number,2,0);

$("#btn_left").on("click",function(){
  idx--;
  show_arrow(num, idx);
  console.log(idx);
})

$("#btn_right").on("click",function(){
  idx++;
  show_arrow(num, idx);
  console.log(idx);
})

document.getElementById("title").innerHTML = dbArr[1];

const textQ = document.querySelectorAll(".text_q");
const left = document.querySelectorAll(".text_a");
const right = document.querySelectorAll(".text_b");

for(let i=0;i<num;i++){
  textQ.item(i).innerHTML = dbArr[3*i+2];
  left.item(i).innerHTML = dbArr[3*i+3];
  right.item(i).innerHTML = dbArr[3*i+4];
}

var result = []; //클릭한 결과값을 담을 배열 -> a,b 둘중 하나로 들어감 아니면 default
for(let i=0; i<num; i++){
  result[i] = "default";
}

$("#sec_L1").on("click",function(){
  $("#sec_L1").css("background-color", "skyblue");
  $("#sec_R1").css("background-color", "white");
  $("#l1").css("color", "white");
  $("#r1").css("color", "black");
  result[0] = "a_1";
});

$("#sec_R1").on("click",function(){
  $("#sec_R1").css("background-color", "greenyellow");
  $("#sec_L1").css("background-color", "white");
  $("#l1").css("color", "black");
  $("#r1").css("color", "white");
  result[0] = "b_1";
});

$("#sec_L2").on("click",function(){
  $("#sec_L2").css("background-color", "skyblue");
  $("#sec_R2").css("background-color", "white");
  $("#l2").css("color", "white");
  $("#r2").css("color", "black");
  result[1] = "a_2";
});

$("#sec_R2").on("click",function(){
  $("#sec_R2").css("background-color", "greenyellow");
  $("#sec_L2").css("background-color", "white");
  $("#l2").css("color", "black");
  $("#r2").css("color", "white");
  result[1] = "b_2";
});

$("#sec_L3").on("click",function(){
  $("#sec_L3").css("background-color", "skyblue");
  $("#sec_R3").css("background-color", "white");
  $("#l3").css("color", "white");
  $("#r3").css("color", "black");
  result[2] = "a_3";
});

$("#sec_R3").on("click",function(){
  $("#sec_R3").css("background-color", "greenyellow");
  $("#sec_L3").css("background-color", "white");
  $("#l3").css("color", "black");
  $("#r3").css("color", "white");
  result[2] = "b_3";
});

$("#sec_L4").on("click",function(){
  $("#sec_L4").css("background-color", "skyblue");
  $("#sec_R4").css("background-color", "white");
  $("#l4").css("color", "white");
  $("#r4").css("color", "black");
  result[3] = "a_4";
});

$("#sec_R4").on("click",function(){
  $("#sec_R4").css("background-color", "greenyellow");
  $("#sec_L4").css("background-color", "white");
  $("#l4").css("color", "black");
  $("#r4").css("color", "white");
  result[3] = "b_4";
});

$("#sec_L5").on("click",function(){
  $("#sec_L5").css("background-color", "skyblue");
  $("#sec_R5").css("background-color", "white");
  $("#l5").css("color", "white");
  $("#r5").css("color", "black");
  result[4] = "a_5";
});

$("#sec_R5").on("click",function(){
  $("#sec_R5").css("background-color", "greenyellow");
  $("#sec_L5").css("background-color", "white");
  $("#l5").css("color", "black");
  $("#r5").css("color", "white");
  result[4] = "b_5";
});

$("#sec_L6").on("click",function(){
  $("#sec_L6").css("background-color", "skyblue");
  $("#sec_R6").css("background-color", "white");
  $("#l6").css("color", "white");
  $("#r6").css("color", "black");
  result[5] = "a_6";
});

$("#sec_R6").on("click",function(){
  $("#sec_R6").css("background-color", "greenyellow");
  $("#sec_L6").css("background-color", "white");
  $("#l6").css("color", "black");
  $("#r6").css("color", "white");
  result[5] = "b_6";
});

$("#sec_L7").on("click",function(){
  $("#sec_L7").css("background-color", "skyblue");
  $("#sec_R7").css("background-color", "white");
  $("#l7").css("color", "white");
  $("#r7").css("color", "black");
  result[6] = "a_7";
});

$("#sec_R7").on("click",function(){
  $("#sec_R7").css("background-color", "greenyellow");
  $("#sec_L7").css("background-color", "white");
  $("#l7").css("color", "black");
  $("#r7").css("color", "white");
  result[6] = "b_7";
});

$("#sec_L8").on("click",function(){
  $("#sec_L8").css("background-color", "skyblue");
  $("#sec_R8").css("background-color", "white");
  $("#l8").css("color", "white");
  $("#r8").css("color", "black");
  result[7] = "a_8";
});

$("#sec_R8").on("click",function(){
  $("#sec_R8").css("background-color", "greenyellow");
  $("#sec_L8").css("background-color", "white");
  $("#l8").css("color", "black");
  $("#r8").css("color", "white");
  result[7] = "b_8";
});

$("#sec_L9").on("click",function(){
  $("#sec_L9").css("background-color", "skyblue");
  $("#sec_R9").css("background-color", "white");
  $("#l9").css("color", "white");
  $("#r9").css("color", "black");
  result[8] = "a_9";
});

$("#sec_R9").on("click",function(){
  $("#sec_R9").css("background-color", "greenyellow");
  $("#sec_L9").css("background-color", "white");
  $("#l9").css("color", "black");
  $("#r9").css("color", "white");
  result[8] = "b_9";
});

$("#sec_L10").on("click",function(){
  $("#sec_L10").css("background-color", "skyblue");
  $("#sec_R10").css("background-color", "white");
  $("#l10").css("color", "white");
  $("#r10").css("color", "black");
  result[9] = "a_10";
});

$("#sec_R10").on("click",function(){
  $("#sec_R10").css("background-color", "greenyellow");
  $("#sec_L10").css("background-color", "white");
  $("#l10").css("color", "black");
  $("#r10").css("color", "white");
  result[9] = "b_10";
});

$("#sec_L11").on("click",function(){
  $("#sec_L11").css("background-color", "skyblue");
  $("#sec_R11").css("background-color", "white");
  $("#l11").css("color", "white");
  $("#r11").css("color", "black");
  result[10] = "a_11";
});

$("#sec_R11").on("click",function(){
  $("#sec_R11").css("background-color", "greenyellow");
  $("#sec_L11").css("background-color", "white");
  $("#l11").css("color", "black");
  $("#r11").css("color", "white");
  result[10] = "b_11";
});

$("#sec_L12").on("click",function(){
  $("#sec_L12").css("background-color", "skyblue");
  $("#sec_R12").css("background-color", "white");
  $("#l12").css("color", "white");
  $("#r12").css("color", "black");
  result[11] = "a_12";
});

$("#sec_R12").on("click",function(){
  $("#sec_R12").css("background-color", "greenyellow");
  $("#sec_L12").css("background-color", "white");
  $("#l12").css("color", "black");
  $("#r12").css("color", "white");
  result[11] = "b_12";
});



document.getElementById("END").addEventListener("click", () => {
  console.log(result);
  let Decision = Decide_end(num, result);
  if(Decision == true){
    const req = {
      id: dbID,
    key0: result[0],
    key1: result[1],
    key2: result[2],
    key3: result[3],
    key4: result[4],
    key5: result[5],
    key6: result[6],
    key7: result[7],
    key8: result[8],
    key9: result[9],
    key10: result[10],
    key11: result[11],
  }
  fetch("/end", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  })
    .then((res) => res.json())
    .then(res => {
      console.log('res: ', res);
    })
    .catch((err) => {
      console.log('err: ', err);
    })

    var url = "http://localhost:8080/end";
    url = url.replace(/\?num=([0-9]+)/ig, '');
    var newURL = url += "?num=" + dbID;
    location.href = newURL;
  }
  else{
    alert("문제 선택을 완료해주세요.");
  }
});

function Decide_end(num, arr){
  let result = [];
  let Decision = true;
  for(let i=0;i<arr.length;i++){
    if(arr[i] != "default"){
      result[i] = arr[i];
    }
  }
  if(num == result.length){
    Decision = true;
  }
  else{
    Decision = false;
  }
  return Decision;
}