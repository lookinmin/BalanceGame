"use strict"
const PORT = 8080;
const app = require("../app");

const mongoDB = require("mongodb");
const mongoose = require('mongoose');
const mongoClient = mongoDB.MongoClient;
// const url = "mongodb+srv: minsu:minsu0418@cluster0.lehll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const json = '{"mongoURL" : "mongodb+srv://minsu:minsu0418@cluster0.lehll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"}';
const obj = JSON.parse(json);
const uri = obj.mongoURL;


mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection succes");
  app.listen(PORT, () => {
    console.log("서버가동");
  });
});

// mongoClient.connect(url)
//   .then(client => {
//     console.log('mongo connected');
//     console.log(client);
//   })
//   .then(app.listen(PORT, () => {
//     console.log('서버 가동');
//   }))
//   .catch(err => console.log(err));
