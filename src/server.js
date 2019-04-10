const express = require("express");

const app = express();

app.get("/teste", (req, res) => {
  return res.send("Hi Isa");
});

app.listen(3333);
