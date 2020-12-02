const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/currency", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/currency", function (req, res) {
  var currency = String(req.body.currency);
  var cnumber = Number(req.body.currencynum);

  var cryptocurrency = String(req.body.cryptocurrency);
  var cryptonumnber = 0;

  if (currency == "CZK") {
    if (cryptocurrency == "BTC") cryptonumnber = cnumber / 384089;
    else if (cryptocurrency == "LTC") cryptonumnber = cnumber / 1671.65;
    else if (cryptocurrency == "XMR") cryptonumnber = cnumber / 2538.5;
  } else if (currency == "EUR") {
    if (cryptocurrency == "BTC") cryptonumnber = cnumber / 14701.1;
    else if (cryptocurrency == "LTC") cryptonumnber = cnumber / 63.98;
    else if (cryptocurrency == "XMR") cryptonumnber = cnumber / 97.16;
  } else if (currency == "USD") {
    if (cryptocurrency == "BTC") cryptonumnber = cnumber / 17542.3;
    else if (cryptocurrency == "LTC") cryptonumnber = cnumber / 76.35;
    else if (cryptocurrency == "XMR") cryptonumnber = cnumber / 115.94;
  }

  res.send("Hodnota: " + cryptonumnber);
});
app.get("//", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.listen(8080, function () {
  console.log("Server poslouchá na portu 8080");
});
