const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Ok");
});

app.listen(8000, () => console.log("My node app is up in running"));
