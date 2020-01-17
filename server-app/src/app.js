const path = require("path");
const express = require("express");
const app = express();
const publicDirPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Ok"
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/help", (req, res) => {
  res.send("This is help page");
});

app.listen("3001", () => {
  console.log("App is running on port 3000");
});
