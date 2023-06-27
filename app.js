const express = require('express');
const app = express();
const path = require('path');
let server;

//den Ordner Public freigeben
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/style"));
app.use(express.static(__dirname + "/pictures"));
app.use(express.static(__dirname + "/view"));
app.use(express.static(__dirname + "/logic"));
app.use(express.static(__dirname + "/data"));
app.use(express.static('public'));

app.get(['/','/home'], (req, res) => {
  res.sendFile(path.join(__dirname, '/view/index.html'));
});

app.get("/question", function (req, res) {
  res.sendFile(__dirname + "/view/question.html")
});
app.get("/question1", function (req, res) {
  res.sendFile(__dirname + "/view/question1.html")
});
app.get("/question2", function (req, res) {
  res.sendFile(__dirname + "/view/question2.html")
});
app.get("/question3", function (req, res) {
  res.sendFile(__dirname + "/view/question3.html")
});
app.get("/question4", function (req, res) {
  res.sendFile(__dirname + "/view/question4.html")
});
app.get("/question5", function (req, res) {
  res.sendFile(__dirname + "/view/question5.html")
});
app.get("/question6", function (req, res) {
  res.sendFile(__dirname + "/view/question6.html")
});
app.get("/question7", function (req, res) {
  res.sendFile(__dirname + "/view/question7.html")
});
app.get("/result", function (req, res) {
  res.sendFile(__dirname + "/view/result.html")
});
app.get("/dogInfo", function (req, res) {
  res.sendFile(__dirname + "/view/dogInfo.html")
});

app.get("/overview", function (req, res) {
  res.sendFile(__dirname + "/view/overview.html")
});

app.get('/impressum', (req, res) => {
  res.sendFile(path.join(__dirname, '/view/impressum.html'));
});


module.exports.start = () => {
  server = app.listen(3000, () => console.log('Die Anwendung ist auf http://localhost:3000 verfügbar.'));
};

module.exports.close = () => {
  server.close();
};