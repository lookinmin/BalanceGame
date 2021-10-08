"use strict"

const gameTitle = $("#gameTitle").attr("value");
const gameNum = $("#gameNum").attr("value");

$("#gameName").html(gameTitle).html();

$("#btn_St").on("click", function(){
  var url = "http://localhost:8080/game";
  url = url.replace(/\?num=([0-9]+)/ig, '');
  var newURL = url += "?num=" + gameNum;
  location.href = newURL;
})
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if(isMobile == true){
  $('body').css("padding-top","30vh");
  $('.title').css("font-size", "3vh");
  $('#btn_St').css("width", "35vw");
  $('#btn_St').css("height", "3vh");
}