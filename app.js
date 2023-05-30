const express = require('express');
const app = express();
const path = require('path');
//den Ordner Public freigeben
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/style"));
app.use(express.static(__dirname + "/pictures"));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Die Anwendung ist auf http://localhost:3000 verfügbar.');
});