var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile == true) {  //모바일이면
  $("body").css("padding-top", "7vh");
  $(".wrapper").css("margin-left", "4vw");
  $(".wrapper").css("margin-right", "4vw");
  $(".item2").css("margin-top", "5vh");
  $(".item3").css("padding-top", "10vh");
  $("#left").css("display", "none");
  $("#right").css("display", "none");
  $(".sector").css("margin-bottom", "5vh");
  $(".sub_item4").css("margin-top", "3vh");
}
else {
  $(".wrapper").css("margin-top", "none");
  $(".item2").css("margin-top", "none");
  $(".item3").css("padding-top", "none");
}

var dbStr = $("#qData").attr("value");
var dbArr = dbStr.split(',');
var Snum = dbArr.length;
var num;
if(Snum%3==2){
  Snum -= 2;
  num = Snum / 3;
}
else if(Snum%3 == 1){
  Snum -= 1;
  num = Snum / 3;
}
else{
  num = Snum / 3;
}
document.getElementById("result_title").innerHTML = dbArr[1]+" 결과";

for(let i=0;i<num;i++){
  document.getElementsByClassName("q-name")[i].innerHTML = dbArr[3*i+2];
  document.getElementsByClassName("ct_textL")[i].innerHTML = dbArr[3*i+3];
  document.getElementsByClassName("ct_textR")[i].innerHTML = dbArr[3*i+4];
}

var dbPercent = $("#perData").attr("value");
var PerArr = dbPercent.split(',');
var Pnum = dbArr.length;
var PerLeft = [];       //숫자값만 담은 왼쪽 %배열
var PerRight = [];      //숫자값만 담은 오른쪽 %배열
var showLeft = [];      //xx%로 표현되는 왼쪽배열
var showRight = [];     //yy%로 표현되는 오른쪽 배열

if(Pnum%2==1){
  Pnum = Pnum - 1;
}
else{
  Pnum = Pnum;
}

for(let i=0;i<Pnum;i++){    //왼쪽%배열
  PerLeft[i] = PerArr[i];
}

for(let i=0;i<PerLeft.length;i++){  //오른쪽 %배열
  PerRight[i] = 100-PerLeft[i];
}

for(let i=0;i<PerLeft.length;i++){
  showLeft[i] = PerLeft[i] + "%";
  showRight[i] = PerRight[i] + "%";
}

for(let i=0;i<num;i++){
  document.getElementsByClassName("per_left")[i].innerHTML = showLeft[i];
  document.getElementsByClassName("per_right")[i].innerHTML = showRight[i];
}

function decide_sector_cnt(n){
  for(let i=1;i<=n;i++){
    $("#E"+i).css("display", "grid");
  }
}

function first_show_arrow(n){
  if(n <= 4){
    $('#left').css("display","none");
    $('#right').css("display","none");
    $("#indi2").css("display", "none");
    $("#indi3").css("display", "none");
  }
  else if(4 < n <= 8){
    $('#left').css("display","none");
    $('#right').css("display","grid");
    $("#indi2").css("display", "grid");
    $("#indi3").css("display", "none");
  }
  else if(8 < n){
    $('#left').css("display","none");
    $('#right').css("display","grid");
    $("#indi2").css("display", "grid");
    $("#indi3").css("display", "grid");
  }
}

$(document).ready(function(){
  window.location.reload();
  first_show_arrow(num);
  decide_sector_cnt(num);
  make_graph();
});

var bars = document.querySelectorAll('.bar-graph');

function make_graph(){
  for(let i=0;i<num;i++){
     bars[i].querySelector('div').style.width = showLeft[i];
  }
}
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

$("#left").on("click",function(){
  idx--;
  show_arrow(num, idx);
})

$("#right").on("click",function(){
  idx++;
  show_arrow(num, idx);
})

function show_arrow(n, idx){
  if(n <= 4){
    $('#left').css("display","none");
    $('#right').css("display","none");
    $("#indi2").css("display", "none");
    $("#indi3").css("display", "none");
  }
  else if(4 < n <= 8){
    if(idx==0){
      $('#left').css("display","none");
      $('#right').css("display","grid");
      $("#indi2").css("display", "grid");
      $("#indi3").css("display", "none");
    }
    else if(idx == 1){
      $('#left').css("display","grid");
      $('#right').css("display","none");
      $("#indi2").css("display", "grid");
      $("#indi3").css("display", "none");
    }
  }
  else if(8 < n <= 12){
    if(idx==0){
      $('#left').css("display","none");
      $('#right').css("display","grid");
      $("#indi2").css("display", "grid");
      $("#indi3").css("display", "grid");
    }
    else if(idx==1){
      $('#left').css("display","grid");
      $('#right').css("display","grid");
      $("#indi2").css("display", "grid");
      $("#indi3").css("display", "grid");
    }
    else if(idx==2){
      $('#left').css("display","grid");
      $('#right').css("display","none");
      $("#indi2").css("display", "grid");
      $("#indi3").css("display", "grid");
    }
  }
}

$('#go_list').on("click", function () {
  var url = "http://localhost:8080/";
  location.href = url;
})

$('#make').on("click", function () {
  location.href = "../make";
})