const express = require("express");
const app = express();

const port = 9080;

app.get("/",(req,res) => {
  res.send(`Hello World!\nVar = ${process.env.TEST}`);
});

app.listen(port, () => {
 console.log(`Server started on port ${port}`);
});
