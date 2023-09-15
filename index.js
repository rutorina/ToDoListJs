import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var DayList = [];
var WorkList = [];
var text;

app.get("/", (req, res) => {
  res.render("index.ejs", { lItems: DayList });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post("/", (req, res) => {
  text = req.body["newItem"];
  DayList.push(text);
  res.render("index.ejs", { lItems: DayList });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { lItems: WorkList });
});

app.post("/work", (req, res) => {
  text = req.body["newItem"];
  WorkList.push(text);
  res.render("work.ejs", { lItems: WorkList });
});
