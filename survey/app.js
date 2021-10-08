const express = require("express");
const bodyParser = require("body-parser");
const app = express();


//-라우팅
const home = require("./src/routes/home"); //만들어준 js파일을 require로 불러오기

//-앱 세팅
app.set("views", "./src/views");//실행한 파일의 상위 폴더 지정
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
//현재 app.js가 있는 위치를 반환해 -> 폴더 경로

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
//URL을 통해 전달되는 데이터에 한글, 공백 등와 같은 문자가
//포함될 경우 제대로 인식되지 않는 문제 해결

app.use(express.json());
app.use("/", home); //user -> 미들 웨어를 등록해주는 메서드
module.exports = app;