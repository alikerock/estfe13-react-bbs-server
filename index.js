const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const port = 3000;

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "bbs",
});

db.connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/list", (req, res) => {
  const sqlQuery = "SELECT * FROM board;";
  db.query(sqlQuery, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

db.end();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
