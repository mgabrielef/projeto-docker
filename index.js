const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello SPI P3!");
});

app.listen(3000);